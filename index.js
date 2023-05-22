const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
const slideCount = slideImg.length; // 슬라이드 개수
const slideWidth = slides.offsetWidth; //한개의 슬라이드 넓이
//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth) * slideCount + 'px';

const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼

console.log(slideWidth);
slides.style.left = '-100%';
slides.prepend(slides.lastElementChild);

function nextSlide() {
  slides.style.left = '-200%';
  slides.append(slides.firstElementChild);
  slides.style.left = '-100%';
}

function prevSlide() {
  slides.style.left = '0%';
  slides.prepend(slides.lastElementChild);
  slides.style.left = '-100%';
}

prev.addEventListener('click', function () {
  prevSlide();
});

next.addEventListener('click', function () {
  nextSlide();
});
