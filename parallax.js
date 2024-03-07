const title = document.getElementById('title');
const text = document.getElementById('text');
const rocket = document.getElementById('rocket');
const mainPlanet = document.getElementById('mainPlanet');
const planetLeft = document.getElementById('planetLeft');
const planetRight = document.getElementById('planetRight');


window.addEventListener('scroll', () => {
  const value = window.scrollY;

  title.style.marginTop = value * 2 + 'px';
  text.style.marginTop = value * 2 + 'px';
  rocket.style.marginRight = value * 1 + 'px';
  mainPlanet.style.marginBottom = -value * 1 + 'px';
  planetLeft.style.marginLeft = value + 'px';
  planetLeft.style.marginTop = value * 2 + 'px';
  planetRight.style.marginRight = value  + 'px';
  planetRight.style.marginTop = value * 2 + 'px';
})