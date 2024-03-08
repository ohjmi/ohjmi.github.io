const title = document.getElementById('title');
const rocket = document.getElementById('rocket');
const mainPlanet = document.getElementById('mainPlanet');
const planetLeft = document.getElementById('planetLeft');
const planetRight = document.getElementById('planetRight');
const cloudLeft = document.getElementById('cloudLeft');
const cloudRight = document.getElementById('cloudRight');


window.addEventListener('scroll', () => {
  const value = window.scrollY;

  title.style.marginTop = value * 2 + 'px';
  rocket.style.marginRight = value * 1 + 'px';
  mainPlanet.style.marginBottom = -value * 1 + 'px';
  planetLeft.style.marginLeft = value + 'px';
  planetLeft.style.marginTop = value * 2 + 'px';
  planetRight.style.marginRight = value  + 'px';
  planetRight.style.marginTop = value * 2 + 'px';
  cloudLeft.style.marginLeft = -value * 2 + 'px';
  cloudRight.style.marginRight = -value * 2 + 'px';
})