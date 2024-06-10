const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'teal', 'black', 'white'];
colors.forEach(color => {
  const element = document.querySelector(`#color-${color}`);
  element.addEventListener('click', () => {
    document.body.style.backgroundColor = color;
  });
});

