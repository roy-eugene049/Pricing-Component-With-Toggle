const toggle = document.getElementById('toggle');
const change = document.getElementById('change');

toggle.addEventListener('change', (e) => {
  change.classList.toggle('show__monthly');
});
