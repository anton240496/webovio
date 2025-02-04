
$(function () {
const op = document.querySelector('.menu_opisanie')//это класс обозначает где должны находится все последующие блоки
    op.addEventListener('click', e => {
        const curb = e.target.closest('button')
        if (!curb) return; 
        const onli = op.querySelector('.on');
        onli?.classList.remove('on')//--это строка позволяет блокам удалять класс у соседних блоков
        const curli = curb.closest('li');
        curli.classList.toggle('on', curli !== onli)
    })

    $slickGreen = false;
    function greenSlider() {
      if ($(window).width() < 901) {
        if (!$slickGreen) {
       
          $('.menu_opisanie').slick({
            dots: true,
            infinite: true,
  
            slidesToShow: 1,
            slidesToScroll: 1,
          });
  
          $slickGreen = true;
        }
      } else if ($(window).width() > 901) {
        if ($slickGreen) {
          $('.menu_opisanie').slick('unslick');
          // $('.menu_opisanie').slick('unslick');
  
            //в одну функции можно задать сколько угодно клдассов для slick
          $slickGreen = false;
        }
      }
    };

    $slickGreen1 = false;
    function greenSlider1() {

      if ($(window).width() < 751) {
        if (!$slickGreen1) {
       
          $('.cart_table').slick({
            dots: true,
            infinite: true,
  
            slidesToShow: 1,
            slidesToScroll: 1,
          });
  
          $slickGreen1 = true;
        }
      } else if ($(window).width() > 751) {
        if ($slickGreen1) {
          $('.cart_table').slick('unslick');
          // $('.menu_opisanie').slick('unslick');
  
            //в одну функции можно задать сколько угодно клдассов для slick
          $slickGreen1 = false;
        }
      }
    };
  
    $(document).ready(function () {
      // ....
      greenSlider();
    });
    $(window).on('resize', function () {
      //  ....
      greenSlider();
    });

    $(document).ready(function () {
      // ....
      greenSlider1();
    });
    $(window).on('resize', function () {
      //  ....
      greenSlider1();
    });
  
  

});