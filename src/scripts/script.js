import '../css/style.css';

const collButton = document.querySelectorAll('.faq__collapsible-button');
const icon = document.querySelectorAll('.faq__collapsible-icon');

let i;

for (i = 0; i < collButton.length; i++) {
  collButton[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
    rotateIcon(collButton, icon);
  });
}

function rotateIcon(collButton, icon) {
  for (i = 0; i < icon.length; i++) {
    for (i = 0; i < collButton.length; i++) {
      if (collButton[i].classList.contains('active')) {
        icon[i].classList.add('rotate180');
      } else {
        icon[i].classList.remove('rotate180');
      }
    }
  }
}
