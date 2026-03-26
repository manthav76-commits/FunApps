const cells = document.querySelectorAll('.cell');
const statusEl = document.getElementById('status');
const overlay = document.getElementById('overlay');
const resultText = document.getElementById('result-text');
const resultIcon = document.getElementById('result-icon');
const winsX = document.getElementById('wins-x');
const winsO = document.getElementById('wins-o');
const drawsEl = document.getElementById('draws');
const scoreX = document.getElementById('score-x');
const scoreO = document.getElementById('score-o');

const WINS = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diags
];

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;
let mode = '2p'; // '2p' or 'ai'
let scores = { X: 0, O: 0, draw: 0 };

// Mode buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    mode = btn.dataset.mode;
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    resetGame();
  });
});

// Cell clicks
cells.forEach(cell => {
  cell.addEventListener('click', () => handleMove(parseInt(cell.dataset.index)));
});

// Restart buttons
document.getElementById('restart').addEventListener('click', resetGame);
document.getElementById('play-again').addEventListener('click', () => {
  overlay.classList.remove('show');
  resetGame();
});

function handleMove(index) {
  if (gameOver || board[index]) return;
  if (mode === 'ai' && currentPlayer === 'O') return;

  placeMove(index, currentPlayer);

  const winner = checkWinner();
  if (winner) { endGame(winner); return; }
  if (board.every(c => c)) { endGame(null); return; }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateStatus();
  highlightTurn();

  if (mode === 'ai' && currentPlayer === 'O' && !gameOver) {
    setTimeout(aiMove, 400);
  }
}

function placeMove(index, player) {
  board[index] = player;
  const cell = cells[index];
  cell.textContent = player;
  cell.classList.add('taken', player.toLowerCase());
}

function aiMove() {
  const move = getBestMove();
  placeMove(move, 'O');

  const winner = checkWinner();
  if (winner) { endGame(winner); return; }
  if (board.every(c => c)) { endGame(null); return; }

  currentPlayer = 'X';
  updateStatus();
  highlightTurn();
}

function getBestMove() {
  // Try to win
  let move = findWinningMove('O');
  if (move !== -1) return move;
  // Block player from winning
  move = findWinningMove('X');
  if (move !== -1) return move;
  // Take center
  if (!board[4]) return 4;
  // Take a corner
  const corners = [0, 2, 6, 8].filter(i => !board[i]);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  // Take any open cell
  const open = board.map((v, i) => v ? null : i).filter(i => i !== null);
  return open[Math.floor(Math.random() * open.length)];
}

function findWinningMove(player) {
  for (const [a, b, c] of WINS) {
    const line = [board[a], board[b], board[c]];
    const indices = [a, b, c];
    const playerCount = line.filter(v => v === player).length;
    const emptyCount = line.filter(v => v === null).length;
    if (playerCount === 2 && emptyCount === 1) {
      return indices[line.indexOf(null)];
    }
  }
  return -1;
}

function checkWinner() {
  for (const [a, b, c] of WINS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      cells[a].classList.add('win');
      cells[b].classList.add('win');
      cells[c].classList.add('win');
      return board[a];
    }
  }
  return null;
}

function endGame(winner) {
  gameOver = true;
  cells.forEach(c => c.classList.add('taken'));

  if (winner) {
    scores[winner]++;
    updateScoreboard();
    resultIcon.textContent = winner === 'X' ? '🎉' : (mode === 'ai' ? '🤖' : '🎉');
    const label = mode === 'ai' && winner === 'O' ? 'AI wins!' : `Player ${winner} wins!`;
    resultText.textContent = label;
    statusEl.textContent = label;
  } else {
    scores.draw++;
    updateScoreboard();
    resultIcon.textContent = '🤝';
    resultText.textContent = "It's a draw!";
    statusEl.textContent = "It's a draw!";
  }

  setTimeout(() => overlay.classList.add('show'), 600);
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });
  updateStatus();
  highlightTurn();
}

function updateStatus() {
  if (mode === 'ai') {
    statusEl.textContent = currentPlayer === 'X' ? 'Your turn (X)' : 'AI is thinking...';
  } else {
    statusEl.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function highlightTurn() {
  scoreX.classList.toggle('active-turn', currentPlayer === 'X');
  scoreO.classList.toggle('active-turn', currentPlayer === 'O');
}

function updateScoreboard() {
  winsX.textContent = scores.X;
  winsO.textContent = scores.O;
  drawsEl.textContent = scores.draw;
}

// Init
highlightTurn();
