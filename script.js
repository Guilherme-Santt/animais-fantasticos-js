(function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
})();

(function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const ActiveClass = "ativo"

  // accordionList.forEach( (e) => {
  //     e.classList.remove('ativo')
  //     console.log(e)
  // });

  if(accordionList.length){
    accordionList[0].classList.add(ActiveClass)
    accordionList[0].nextElementSibling.classList.add(ActiveClass)
    
    function ActiveAccordion(){
      // accordionList.forEach( (e) => {
      //   e.classList.remove('ativo')
      //   e.nextElementSibling.classList.remove('ativo')
      //   console.log(e)
      // });
      // this.classList.toggle(ActiveClass)
      this.nextElementSibling.classList.toggle(ActiveClass)
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', ActiveAccordion)
    });
  }
})();


(function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
})();

(function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
})();

(() => {
  const btnMail = document.querySelector('.js-button')
  const modal = document.querySelector('.modal')
  const janela_modal = document.querySelector('.janela-modal')
  const Toggle = (e) => {
    e.classList.toggle('high')
  }
  
  btnMail.addEventListener("click", () => Toggle(modal))
  modal.addEventListener("click", () => Toggle(modal))
  janela_modal.addEventListener("click", (e) => e.stopPropagation())
})()
  