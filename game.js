const express = require('express');
const  app = express();
const port = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const lodash = require('lodash');
let players =[];
let round = 0;

app.use(express.static(__dirname+'/public'));

http.listen(port,function(){
    console.log('listening on *:'+port);
})

io.on('connection',function(socket){
    let userID;
    socket.on('new player', function(id, name) {
        let existingPlayer = players.find(player => player.name === name);
        if (existingPlayer) {
          socket.emit('name taken', name);
        } else {
          userID = {
            name: name,
            id: id,
            round: round,
            roll: null,
            winner: false
          };
          players.push(userID);
          io.emit('players', players);
        }
      });
    socket.on('disconnect',function(reason){
        console.log(reason);
        players = players.filter(function(obj){
            return  obj !== userID;
        })
        io.emit('players',players);
    })
    socket.on('roll',function(){
        // Prevent rolling more than once per round
        if (userID.roll !== null) {
            socket.emit('roll_denied', 'You have already rolled this round.');
            return;
        }
        userID.roll = lodash.random(1,1000);
        console.log(userID);
        nextRoundCheck();
    })

    socket.on('next_round', function() {
        // Allow any player to trigger next round, but only if all have rolled
        let allRolled = players.length > 1 && players.every(p => p.roll !== null);
        let winner = players.find(p => p.winner);
        if (allRolled && winner) {
            round++;
            players.forEach(function(player,index){
                player.winner =  false;
                player.roll = null;
                player.round = round;
            });
            io.emit('players', players);
            io.emit('inplay', 'Round #' + (round-1) + ' Winner is ' + winner.name);
        }
    });
    io.emit('players',players);
})

function  nextRoundCheck(){
    if(players.length > 0){
        let ready = 0;
        let top = 0;
        let win = 0;
        players.forEach(function(player,index){
            player.winner = false;
            if(player.roll){
                ready++;
                if(player.roll  > top){
                    win = index;
                    top = player.roll;
                }
            }
        })
        // Only mark a winner if at least one player has rolled
        if (ready > 0) {
            players[win].winner  = true;
        }
        io.emit('players',players);
        // If everyone has rolled, announce winner but do NOT auto-advance
        if(ready >= players.length && players.length > 1){
            io.emit('inplay','Round #'+round+' Winner is '+players[win].name);
        }
    }
}
