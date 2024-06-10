const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="box-inner">
      <h3>
      ${e.key === ' ' ? 'Space' : e.key}
      </h3>
      <small>event.key</small>
    </div>
    <div class="box-inner">
      <h3>
      ${e.keyCode}
      </h3>
      <small>event.keyCode</small>
    </div>
    <div class="box-inner">
      <h3>
      ${e.code}
      </h3>
      <small>event.code</small>
    </div>
  `;
});
