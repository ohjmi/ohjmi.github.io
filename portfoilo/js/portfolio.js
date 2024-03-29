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


let lastWidth = window.innerWidth; // 이전 너비 저장
let delay = 2000; // 딜레이 설정
let timer = null; // 타이머 초기화

window.addEventListener('resize', function(){
	clearTimeout(timer); // 기존 타이머 초기화
	timer = setTimeout(function(){
		console.log('resize event!');
		// 너비가 변경되었는지 확인하고, 높이는 변경되지 않았는지 확인
		if (window.innerWidth !== lastWidth) {
			// 너비만 변경되었다면 setupAnimations 함수 실행
			setupAnimations();

			// 현재 너비를 저장하여 다음 비교를 위해 업데이트
			lastWidth = window.innerWidth;
		}
		// 높이나 너비가 변경되면 이전 높이와 너비를 업데이트
		lastHeight = window.innerHeight;

	}, delay);
});


document.querySelectorAll(".project .sec-content").forEach((section, index) => {
  let slides = section.querySelectorAll(".img-box > img");
  let prevButton = section.querySelector(".prev");
  let nextButton = section.querySelector(".next");
  let imgCount = section.querySelector(".img-count");
  let currentSlide = 0;

  function showSlide(n) {
      slides.forEach(slide => {
          slide.style.display = "none";
      });
      slides[n].style.display = "block";
      updateImgCount();
  }

  function prevSlide() {
      if(currentSlide > 0) currentSlide -= 1;
      else currentSlide = slides.length - 1;
      showSlide(currentSlide);
  }

  function nextSlide() {
      if(currentSlide < slides.length - 1) currentSlide += 1;
      else currentSlide = 0;
      showSlide(currentSlide);
  }

  function updateImgCount() {
      imgCount.textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(currentSlide); // 초기 슬라이드 표시
});



