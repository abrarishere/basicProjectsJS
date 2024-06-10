const input = document.getElementById('input');
const add = document.getElementById('add');
const list = document.getElementById('list');

add.addEventListener('click', () => {
  const text = input.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.innerHTML = `${text} <button>Delete</button>`;
    list.appendChild(li);
    input.value = '';
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentNode.remove();
  } else if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
});
