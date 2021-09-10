const select1 = document.querySelector('.select');
const arrow = document.querySelector('.select__arrow');

select1.addEventListener('click', _ => {
  select1.classList.toggle('active');
  arrow.classList.toggle('rotate');
})