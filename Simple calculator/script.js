const calc = (op) => {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  let res;

  if (isNaN(n1) || isNaN(n2)) {
    res = 'Please enter valid numbers';
  } else {
    switch (op) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? (n1 / n2) : 'Cannot divide by zero'; break;
      default: res = 'Invalid operation';
    }
  }

  document.getElementById('result').textContent = `Result: ${res}`;
};

document.querySelectorAll('button[data-op]').forEach(button => {
  button.addEventListener('click', () => calc(button.getAttribute('data-op')));
});

document.getElementById('themeToggle').addEventListener('click', () => {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    calc('+');
  }
});
