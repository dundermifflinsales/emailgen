const container = document.getElementById('container');
const generateBtn = document.getElementById('generateBtn');
const backBtn = document.getElementById('backBtn');
const toggleDark = document.getElementById('toggleDark');
const tone=document.getElementById('toneSelect').value;

generateBtn.addEventListener('click', () => {
  container.classList.add('two-columns');
});

backBtn.addEventListener('click', () => {
  container.classList.remove('two-columns');
});

toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    toggleDark.textContent = '☀️';
  }
  else {
    toggleDark.textContent = '🌙';
  }
});
