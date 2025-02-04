// $(function () {
//     let btns = document.querySelectorAll('.menu_blink');
//     // console.log(btns)
//     for (btn of btns) {
//         btn.addEventListener('click', function () {
//             let card = this.closest('.menu_opisanie li');
//             let arr = card.querySelector('.menu_blink span');
//             let clas = card.querySelector('.more_open');
//             // let but = card.querySelector('.catalog_o_tovare a');

//             if (arr.style.transform === "rotate(90deg)") {
//                 arr.style.transform = "rotate(0deg)";
//                 clas.style.fontSize = "0px";
                

//             } else {
//                 arr.style.transform = "rotate(90deg)";
//                 clas.style.fontSize = "16px";
               
                
//             }

//         });
//     }
// });



const op = document.querySelector('.menu_opisanie')
op.addEventListener('click', e => {
    const o = e.target.closest('.menu_blink')
    const o1 = e.target.closest('.menu_blink')
   
    // let arr = e.querySelector('.menu_blink span');
    // if (!o) return 
    // let arr = e.querySelector('.menu_blink span')
    // if($(".more_open").hasClass("on") && $(".menu_blink").hasClass("on1")){
    op.querySelector('.on')?.classList.remove('on')
    op.querySelector('.on1')?.classList.remove('on1')
    // }else{
        
    o.closest('li').querySelector('.more_open').classList.add('on')
    o.closest('li').querySelector('.menu_blink').classList.add('on1')
    // }

    // op.querySelector('.on')?.classList.remove('on')
    // o.closest('li').querySelector('.more_open').classList.add('on')
    // o1.closest('li').querySelector('.menu_blink').classList.add('on1')
    // if (arr.style.transform === "rotate(90deg)") {
    //     arr.style.transform = "rotate(0deg)";
    // }

    
    // o.closest('li').querySelector('.menu_blink').classList.add('on')
    // $('.menu_blink').on('click', function(){
    //     $('.menu_blink').removeClass('on1');
    
    
    //   });
})

// $('.menu_blink').on('click', function(){
//     $('.menu_blink').removeClass('on1');


//   });

//   $('#menu li a').on('click', function(){
//     $('#menu li a.current').removeClass('current');
//     $(this).addClass('current');
// });

// const op = document.querySelector('.menu_opisanie')
// op.addEventListener('click', e => {
//     const o = e.target.closest('button')
//     if (!o) return; 
//     op.querySelector('.on')?.classList.remove('on')
//     o.closest('li').classList.add('on')
// })



// $(function () {
//     let btns = document.querySelectorAll('.catalog_Info');
//     // console.log(btns)
//     for (btn of btns) {
//         btn.addEventListener('click', function () {
//             let card = this.closest('.catalog li');
//             let arr = card.querySelector('.catalog_svg_img');
//             let clas = card.querySelector('.catalog_o_tovare');
//             // let but = card.querySelector('.catalog_o_tovare a');

//             if (arr.style.transform === "rotate(90deg)") {
//                 arr.style.transform = "rotate(0deg)";
//                 clas.style.fontSize = "0px"
//                 //   card.style.height = "84px";
//                 //   clas.style.height = "84px";
//                 //   clas.style.top = "-92px";
//                 //   clas.style.background = "transparent";
//                 //   clas.style.color = "transparent";

//                 but.style.display = "none";
//             } else {
//                 arr.style.transform = "rotate(90deg)";
//                 clas.style.fontSize = "16px"
//                 //   card.style.height = "auto";
//                 //   clas.style.height = "auto";
//                 //   clas.style.top = "0";
//                 //   clas.style.background = "white";
//                 //   clas.style.color = "black";
//                 //   but.style.display = "flex";

//             }

//         });
//     }
// });

// const op = document.querySelector('.menu_opisanie')
//     op.addEventListener('click', e => {
//         const curb = e.target.closest('button')
//         if (!curb) return; 
//         const onli = op.querySelector('.on');
//         onli?.classList.remove('on')
//         const curli = curb.closest('li');
//         curli.classList.toggle('on', curli !== onli)
//     })