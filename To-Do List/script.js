const list = document.getElementById('list');
const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const themeToggle = document.getElementById('themeToggle');

addBtn.addEventListener('click', addTask);
clearAllBtn.addEventListener('click', clearAll);
themeToggle.addEventListener('click', toggleTheme);

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = createListItem(task);
  list.appendChild(li);
  taskInput.value = '';
  save();
}

function createListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    save();
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.style.marginLeft = '0.5rem';
  delBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
    save();
  };

  li.appendChild(delBtn);
  return li;
}

function save() {
  localStorage.setItem('todos', list.innerHTML);
}

function load() {
  list.innerHTML = localStorage.getItem('todos') || '';
  Array.from(list.children).forEach(li => {
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      save();
    });
    li.querySelector('button')?.addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
      save();
    });
  });
}

function clearAll() {
  list.innerHTML = '';
  save();
}

function toggleTheme() {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
}

load();
