const data = [
  {
    id: 1,
    src: "visual01.png",
    srcB: "visual011.png",
    alt: "기생충",
  },
  {
    id: 2,
    src: "visual02.png",
    srcB: "visual012.png",
    alt: "던파,업데이트 공지",
  },
  {
    id: 3,
    src: "visual05.png",
    srcB: "visual015.png",
    alt: "범카",
  },
  {
    id: 4,
    src: "visual04.png",
    srcB: "visual014.png",
    alt: "조커",
  },
];





const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
  },
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  parallax: true,
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
          <img src="./img/${data[index].src}" alt="${data[index].alt}.png" />
        </span>
      `;
    },
    // type:'fraction'
  },
});


// const split = new SplitText('h3',{type:'chars'})


// swiper
// .on('slideChangeTransitionStart',function(){
//   gsap.to(split.chars,{
//     yPercent:120,
//     stagger:0.05,
//   })
// })
// .on('slideChangeTransitionEnd',function(){
//   gsap.to(split.chars,{
//     yPercent:0,
//     stagger:0.05,
//   })
// })


  // 이미지에 마우스 이벤트 등록
  var images = document.querySelectorAll('.swiper-image');
  images.forEach(function(image) {
    image.addEventListener('mouseenter', function() {
      // 해당 이미지의 src 속성을 변경하여 다른 이미지로 교체
      if (image.src.includes("visual01")) {
        image.src = './img/visual011.png';
      } else if (image.src.includes("visual02")) {
        image.src = './img/visual012.png';
      } else if (image.src.includes("visual05")) {
        image.src = './img/visual015.png';
      } else if (image.src.includes("visual04")) {
        image.src = './img/visual014.png';
      }
    });

    image.addEventListener('mouseleave', function() {
      // 마우스를 떼면 다시 원래의 이미지로 복원
      if (image.src.includes("visual011")) {
        image.src = './img/visual01.png';
      } else if (image.src.includes("visual012")) {
        image.src = './img/visual02.png';
      } else if (image.src.includes("visual015")) {
        image.src = './img/visual05.png';
      } else if (image.src.includes("visual014")) {
        image.src = './img/visual04.png';
      }
    });
  });