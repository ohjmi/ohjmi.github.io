const textWrap = document.getElementById('textWrap');
const starLeft = document.getElementById('starLeft');
const starRight = document.getElementById('starRight');
const mainCharacter = document.getElementById('mainCharacter');
const cloudLeft = document.getElementById('cloudLeft');
const cloudRight = document.getElementById('cloudRight');
const scrollWrap = document.getElementById('scroll-wrap');


window.addEventListener('scroll', () => {
  const value = window.scrollY;
  const opacityValue = Math.max(0, Math.min(1, 1 - value * 0.005));

  textWrap.style.marginTop = value * 1 + 'px';
  mainCharacter.style.marginLeft = value * 2 + 'px';
  starLeft.style.marginLeft = -value + 'px';
  starLeft.style.marginTop = -value + 'px';
  starRight.style.marginRight = -value + 'px';
  starRight.style.marginTop = -value  + 'px';
  cloudLeft.style.marginLeft = -value * 1 + 'px';
  cloudRight.style.marginRight = -value * 1 + 'px';
  scrollWrap.style.opacity = opacityValue;
})

// 뷰포트 너비에 따른 애니메이션 매개변수를 반환하는 함수
function getAnimationParams() {
  // 현재 뷰포트 너비를 기준으로 조건을 설정
  if (window.innerWidth >= 768) {
    // PC 뷰에 해당하는 매개변수
    return {
      start: "0 90%",
      end: "100% 100%",
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5
    };
  } else {
    // 모바일 뷰에 해당하는 매개변수
    return {
      start: "top 50%",
      end: "bottom 50%",
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5
    };
  }
}

// 애니메이션을 설정하는 함수
function setupAnimations() {
  document.querySelectorAll('.sec-wrap').forEach(element => {
    let child = element.children;

    // 현재 뷰포트에 맞는 애니메이션 매개변수를 가져옴
    let params = getAnimationParams();

    gsap.from(child, {
      scrollTrigger: {
        trigger: element,
        start: params.start,
        end: params.end,
        toggleActions: "play none none none",
        // scrub:1,
        // markers: true,
      },
      yPercent: params.yPercent,
      opacity: params.opacity,
      duration: params.duration,
      stagger: params.stagger
    });
  });
}

// 초기 애니메이션 설정
setupAnimations();

// 뷰포트 크기 변경 감지 및 애니메이션 매개변수 조정
window.addEventListener('resize', function() {
  location.reload()
});



let slides = document.querySelectorAll(".img-box > img");
let prev = document.querySelector(".back");
let next = document.querySelector(".next");
let imgCount = document.querySelector(".img-count");
let current = 0;

showSlide(current); // 초기 슬라이드 표시

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
  updateImgCount(); // 이미지 카운터 업데이트
}

function prevSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  showSlide(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlide(current);
}

function updateImgCount() {
  imgCount.textContent = `${current + 1} / ${slides.length}`;

}

