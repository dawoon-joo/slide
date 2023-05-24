const slides = document.querySelector('.slides'); 
let slideImg = document.querySelectorAll('.slides li'); 
const slideCount = slideImg.length; 
const slideWidth = slides.offsetWidth;
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
const count = 0;

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth) * slideCount + 'px';
//초기 상태
slides.style.left = '-100%';
slides.prepend(slides.lastElementChild);

//2번째 슬라이드에 클래스 추가
function updateSlideImages() {
  slideImg = document.querySelectorAll('.slides li');
  [...slideImg].map((slide ,i)=> {
  i === 1 ? slide.classList.add('on') : slide.classList.remove('on');
  });
  // console.log(slideImg);
}

function nextSlide() {
  slides.style.transition = 'left 0.5s';
  slides.style.left = '-200%';
  setTimeout(function() {
    slides.append(slides.firstElementChild);
    slides.style.transition = 'none';
    slides.style.left = '-100%';
    updateSlideImages()
  }, 500);
}

function prevSlide() {
  slides.style.transition = 'left 0.5s';
  slides.style.left = '0';
  setTimeout(function(){
    slides.prepend(slides.lastElementChild);
    slides.style.transition = 'none';
    slides.style.left = '-100%';
    updateSlideImages()
  }, 500)
}


prev.addEventListener('click', function () {
  prevSlide(count - 1);
});

next.addEventListener('click', function () {
  nextSlide(count + 1);
});


