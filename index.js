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
    this.startPoint = 0;
    this.endPoint = 0;
    this.tabs = this.container.querySelector('.tabs');
    this.tabbtns = this.tabs.querySelectorAll('.tab');
    this.tabbtn = this.tabs.querySelector('.tab');

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

    this.tabbtns.forEach((el, index) => {
      el.addEventListener('click', () => {
        for(let tab of this.tabbtns){
          tab.classList.remove('on');
        }
        this.tabbtns[index].classList.add('on');

        const selectedDataR = el.getAttribute('data-r');
        let slideIndex = 0;
    
        this.slideImg.forEach((slide, index) => {
          if (slide.getAttribute('data-r') === selectedDataR) {
            slideIndex = index;
            return;
          }
        });
        
        const slicedArray = Array.from(this.slideImg).slice(slideIndex - 1);
        const movedElements = Array.from(this.slideImg).slice(0, (slideIndex - 1));
        const rearrangedSlideImg = slicedArray.concat(movedElements);

        this.enableClick = false;
        this.slides.innerHTML = '';
        rearrangedSlideImg.forEach(slide => {
          this.slides.appendChild(slide);
        });
        
        setTimeout(() => {
          this.updateSlideImages();
          this.enableClick = true;
        }, 500);
      })
    })
    
    //pc touch slide
    this.slides.addEventListener('mousedown', (e) => {
      this.startPoint = e.pageX;
    })
    this.slides.addEventListener('mouseup', (e) => {
      this.endPoint = e.pageX;
      if(this.enableClick == true){
        this.startPoint < this.endPoint ? this.prevSlide() : this.nextSlide();
      }
    })

    //mobile touch slide
    this.slides.addEventListener('touchstart', (e) => {
      this.startPoint = e.touches[0].pageX;
    })
    this.slides.addEventListener('touchend', (e) => {
      this.endPoint = e.changedTouches[0].pageX;
      if(this.enableClick == true){
        this.startPoint < this.endPoint ? this.prevSlide() : this.nextSlide();
      }
    })
  }

  updateSlideImages() {
    this.slideImg = this.slides.querySelectorAll('.slides li');
    this.slideImg.forEach((slide, index) => {
      slide.classList.remove('on');
      if (index === 1) {
        slide.classList.add('on');
      }
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