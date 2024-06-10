let emoji = document.querySelector('.emoji');
let emojis = [
  '😁',
  '😂',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '😋',
  '😌',
  '😍',
  '😎',
  '😏',
  '😐',
  '😑',
  '😒',
  '😓',
  '😔',
  '😕',
  '😖',
  '😗',
  '😘',
  '😙',
  '😚',
  '😛',
  '😜',
  '😝',
  '😞',
  '😟',
  '😠',
  '😡',
  '😢',
  '😣',
  '😤',
]

emoji.addEventListener('mouseover', () => {
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.textContent = randomEmoji;
});
