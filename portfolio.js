const textWrap = document.getElementById('textWrap');
const starLeft = document.getElementById('starLeft');
const starRight = document.getElementById('starRight');
const mainCharacter = document.getElementById('mainCharacter');
const cloudLeft = document.getElementById('cloudLeft');
const cloudRight = document.getElementById('cloudRight');


window.addEventListener('scroll', () => {
  const value = window.scrollY;

  textWrap.style.marginLeft = -value * 3 + 'px';
  mainCharacter.style.marginLeft = value * 2 + 'px';
  starLeft.style.marginLeft = -value + 'px';
  starLeft.style.marginTop = -value + 'px';
  starRight.style.marginRight = -value + 'px';
  starRight.style.marginTop = -value  + 'px';
  cloudLeft.style.marginLeft = -value * 1 + 'px';
  cloudRight.style.marginRight = -value * 1 + 'px';
})