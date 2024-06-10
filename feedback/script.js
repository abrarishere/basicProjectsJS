const submit = document.querySelector('.submit');
const emoji = document.querySelectorAll('.emoji');
const panel = document.querySelector('.panel');
const before = document.querySelector('.before');
let selectedEmoji = '';
const feedback = document.querySelector('#feedback');


emoji.forEach((e) => {
  e.addEventListener('click', () => {
    emoji.forEach((e) => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
    selectedEmoji = e;
    submit.style.display = 'block';
  });
});

submit.addEventListener('click', () => {
  console.log(selectedEmoji);
  before.style.display = 'none';
  panel.style.display = 'block';
  feedback.textContent = `You selected ${selectedEmoji.nextElementSibling.innerText} ${selectedEmoji.textContent} .`;
});

