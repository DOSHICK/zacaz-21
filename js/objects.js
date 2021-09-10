document.querySelectorAll('[name=section-group]').forEach(s => {
  s.addEventListener('change', function () {
    document.querySelectorAll('.floor').forEach(d => d.classList.add('deactive'));
    document.getElementById(this.value).classList.remove('deactive');
  });
});

document.querySelectorAll('[name=filter__group]').forEach(s => {
  s.addEventListener('change', function () {
    document.querySelectorAll('.filter').forEach(d => d.classList.add('deactive'));
    document.getElementById(this.value).classList.remove('deactive');
  });
});