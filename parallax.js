const title = document.getElementById('title');
const rocket = document.getElementById('rocket');
const mainPlanet = document.getElementById('mainPlanet');
const planetLeft = document.getElementById('planetLeft');
const planetRight = document.getElementById('planetRight');


window.addEventListener('scroll', () => {
  const value = window.scrollY;

  title.style.marginTop = value * 3 + 'px';
  rocket.style.marginRight = value * 5 + 'px';
  rocket.style.marginBottom = value * 2.5 + 'px';
  mainPlanet.style.marginBottom = -value * 2 + 'px';
  planetLeft.style.marginLeft = value + 'px';
  planetLeft.style.marginTop = value * 3 + 'px';
  planetRight.style.marginRight = value  + 'px';
  planetRight.style.marginTop = value * 3 + 'px';
})