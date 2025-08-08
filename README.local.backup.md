# Node Dice Game

A simple multiplayer dice game built with Node.js, Express, and Socket.IO. Players join, roll a dice, and compete for the highest roll each round. After all players have rolled, anyone can start the next round.

## Features
- Real-time multiplayer gameplay using Socket.IO
- Each player can roll once per round
- Winner is highlighted each round
- "Next Round" button appears after all have rolled
- Modern UI with styled buttons

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or newer recommended)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd node-dice-game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the server:
```sh
node game.js
```

Open your browser and go to `http://localhost:3000`.

Open multiple browser windows/tabs to play with friends.

## Project Structure
```
node-dice-game/
├── game.js           # Main server file (Express + Socket.IO)
├── package.json      # Project metadata and dependencies
├── public/
│   ├── game.html     # Main client HTML
│   └── style.css     # Client styles
└── readme.txt        # (Legacy/readme file)
```

## How to Play
1. Enter your name and click "Join".
2. Click "ROLL" to roll your dice (once per round).
3. Wait for all players to roll. The winner is announced.
4. Click "Next Round" (anyone can) to start a new round.

## Notes
- Do not upload `node_modules` to GitHub. Use `.gitignore`.
- All dependencies are restored via `npm install`.

## License
MIT License
