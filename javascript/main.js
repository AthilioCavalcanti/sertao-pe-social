const btn = document.querySelector('body > header img');
const menu = document.querySelector('body > header nav');
btn.addEventListener('click', ()=>{
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});
document.addEventListener('scroll', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  }
});