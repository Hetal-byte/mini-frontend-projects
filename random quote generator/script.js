const quotes = [
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "The best way out is always through.",
  "You miss 100% of the shots you don’t take.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going."
];

const quoteEl = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuote');
const themeToggle = document.getElementById('themeToggle');

newQuoteBtn.addEventListener('click', generateQuote);
themeToggle.addEventListener('click', toggleTheme);

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[random];
}

function toggleTheme() {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
}
