# Node Dice Game Documentation

## Overview
Node Dice Game is a real-time multiplayer dice rolling game built with Node.js, Express, and Socket.IO. Players join, roll dice, and compete for the highest score each round. The game features a modern UI and supports multiple players in the same session.

## Features
- Real-time multiplayer gameplay
- Each player can roll once per round
- Winner is highlighted each round
- "Next Round" button appears after all have rolled
- Modern UI with styled buttons

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/inusha-thathsara/Dice_Rolling_MiniGame.git
   cd node-dice-game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Game
Start the server:
```sh
node game.js
```

Open your browser and go to `http://localhost:3000`.

## How to Play
1. Enter your name and click "Join".
2. Click "ROLL" to roll your dice (once per round).
3. Wait for all players to roll. The winner is announced.
4. Click "Next Round" (anyone can) to start a new round.

## Project Structure
```
node-dice-game/
├── game.js           # Main server file (Express + Socket.IO)
├── package.json      # Project metadata and dependencies
├── public/
│   ├── game.html     # Main client HTML
│   └── style.css     # Client styles
├── docs/             # Documentation
│   └── index.md      # Main documentation file
├── .gitignore        # Git ignore file
├── LICENSE           # License file
├── README.md         # Project overview
└── readme.txt        # (Legacy/readme file)
```

## API Reference
### Server Endpoints
- `/` : Serves the main game HTML.
- Socket.IO events:
  - `join`: Player joins the game.
  - `roll`: Player rolls the dice.
  - `nextRound`: Starts a new round.
  - `update`: Broadcasts game state to all players.

## Contributing
Feel free to submit issues or pull requests on GitHub.

## License
MIT License
