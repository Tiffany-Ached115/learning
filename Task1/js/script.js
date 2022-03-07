let toStart = document.querySelector('.to-start');
window.addEventListener ('scroll', function () {
    let scrollHeight = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if (scrollHeight > coords) {
      toStart.classList.add('to-start-show');
    }
    if (scrollHeight < coords) {
      toStart.classList.remove('to-start-show');
    }
  });

toStart.addEventListener ('click', function() {
  if (window.pageYOffset > 0) {
    window.scrollTo(0, -15);
  }
});


