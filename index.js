class SlideTest {
  constructor(target){
    this.init(target);
  }
  init(target){
    this.container = document.querySelector(target);
    this.slides = this.container.querySelector('#slides'); 
    this.slideImg = this.slides.querySelectorAll('.slides li'); 
    this.slideCount = this.slideImg.length; 
    this.prev = this.container.querySelector('.prev'); 
    this.next = this.container.querySelector('.next'); 
    this.count = 0;
    this.enableClick = true;

    //전체 슬라이드 컨테이너 넓이 설정
    this.slides.style.width = `${100 * this.slideCount}%`;
    //초기 상태
    this.slides.style.left = '-100%';
    this.slides.prepend(this.slides.lastElementChild);

    this.prev.addEventListener('click', () => {
      if(this.enableClick == true){
        this.prevSlide(this.count - 1);
      }
    });
    
    this.next.addEventListener('click', () => {
      if(this.enableClick == true){
        this.nextSlide(this.count + 1);
      }
    });
    
  }

  updateSlideImages() {
    this.slideImg = document.querySelectorAll('.slides li');
    [...this.slideImg].map((slide ,i)=> {
    i === 1 ? slide.classList.add('on') : slide.classList.remove('on');
    });
  }

  nextSlide() {
    this.slides.style.transition = 'left 1s';
    this.slides.style.left = '-200%';
    this.enableClick = false;
    setTimeout(()=> {
      this.slides.append(this.slides.firstElementChild);
      this.slides.style.transition = 'none';
      this.slides.style.left = '-100%';
      this.updateSlideImages();
      this.enableClick = true;
    }, 1000);
  }
  
  prevSlide() {
    this.slides.style.transition = 'left 1s';
    this.slides.style.left = '0';
    this.enableClick = false;
    setTimeout(()=>{
      this.slides.prepend(this.slides.lastElementChild);
      this.slides.style.transition = 'none';
      this.slides.style.left = '-100%';
      this.updateSlideImages();
      this.enableClick = true;
    }, 1000)
  }
  

}