const display = document.getElementById('result');
const expression = document.getElementById('expression');

let current = '0';
let previous = null;
let operator = null;
let waitingForOperand = false;
let justEvaluated = false;

function updateDisplay() {
  display.textContent = formatNumber(current);
  display.className = 'result' + (current.length > 9 ? ' small' : '');
}

function formatNumber(num) {
  if (num === 'Error') return 'Error';
  const n = parseFloat(num);
  if (isNaN(n)) return num;
  // Avoid floating point display noise
  const formatted = parseFloat(n.toPrecision(10)).toString();
  return formatted;
}

function inputDigit(digit) {
  if (waitingForOperand) {
    current = digit;
    waitingForOperand = false;
  } else if (justEvaluated) {
    current = digit;
    justEvaluated = false;
    expression.textContent = '';
  } else {
    current = current === '0' ? digit : current + digit;
  }
  updateDisplay();
}

function inputDecimal() {
  if (waitingForOperand) {
    current = '0.';
    waitingForOperand = false;
    updateDisplay();
    return;
  }
  if (justEvaluated) {
    current = '0.';
    justEvaluated = false;
    expression.textContent = '';
    updateDisplay();
    return;
  }
  if (!current.includes('.')) {
    current += '.';
    updateDisplay();
  }
}

function handleOperator(op) {
  const val = parseFloat(current);

  if (operator && waitingForOperand) {
    operator = op;
    highlightOperator(op);
    return;
  }

  if (previous !== null && !waitingForOperand && !justEvaluated) {
    const result = calculate(previous, val, operator);
    expression.textContent = `${formatNumber(previous)} ${operatorSymbol(operator)} ${formatNumber(current)} =`;
    current = result.toString();
    previous = result;
    updateDisplay();
  } else {
    previous = val;
  }

  justEvaluated = false;
  operator = op;
  waitingForOperand = true;
  expression.textContent = `${formatNumber(previous)} ${operatorSymbol(op)}`;
  highlightOperator(op);
}

function calculate(a, b, op) {
  switch (op) {
    case '+': return round(a + b);
    case '-': return round(a - b);
    case '*': return round(a * b);
    case '/': return b === 0 ? 'Error' : round(a / b);
    default: return b;
  }
}

function round(n) {
  return parseFloat(n.toPrecision(10));
}

function operatorSymbol(op) {
  return { '+': '+', '-': '−', '*': '×', '/': '÷' }[op] || op;
}

function highlightOperator(op) {
  document.querySelectorAll('.btn-operator').forEach(btn => btn.classList.remove('active'));
  const map = { '+': '+', '-': '−', '*': '×', '/': '÷' };
  document.querySelectorAll('[data-action="operator"]').forEach(btn => {
    if (btn.dataset.value === op) btn.classList.add('active');
  });
}

function equals() {
  if (operator === null || waitingForOperand) return;

  const val = parseFloat(current);
  const result = calculate(previous, val, operator);
  expression.textContent = `${formatNumber(previous)} ${operatorSymbol(operator)} ${formatNumber(current)} =`;
  current = result.toString();
  previous = null;
  operator = null;
  waitingForOperand = false;
  justEvaluated = true;
  updateDisplay();
  document.querySelectorAll('.btn-operator').forEach(btn => btn.classList.remove('active'));
}

function clear() {
  current = '0';
  previous = null;
  operator = null;
  waitingForOperand = false;
  justEvaluated = false;
  expression.textContent = '';
  updateDisplay();
  document.querySelectorAll('.btn-operator').forEach(btn => btn.classList.remove('active'));
}

function toggleSign() {
  current = (parseFloat(current) * -1).toString();
  updateDisplay();
}

function percent() {
  current = (parseFloat(current) / 100).toString();
  updateDisplay();
}

// Button click events
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    const value = btn.dataset.value;

    switch (action) {
      case 'digit': inputDigit(value); break;
      case 'decimal': inputDecimal(); break;
      case 'operator': handleOperator(value); break;
      case 'equals': equals(); break;
      case 'clear': clear(); break;
      case 'toggle-sign': toggleSign(); break;
      case 'percent': percent(); break;
    }
  });
});

// Keyboard support
document.addEventListener('keydown', e => {
  if (e.key >= '0' && e.key <= '9') inputDigit(e.key);
  else if (e.key === '.') inputDecimal();
  else if (e.key === '+') handleOperator('+');
  else if (e.key === '-') handleOperator('-');
  else if (e.key === '*') handleOperator('*');
  else if (e.key === '/') { e.preventDefault(); handleOperator('/'); }
  else if (e.key === 'Enter' || e.key === '=') equals();
  else if (e.key === 'Escape') clear();
  else if (e.key === 'Backspace') {
    if (current.length > 1) {
      current = current.slice(0, -1);
    } else {
      current = '0';
    }
    updateDisplay();
  }
});

updateDisplay();
