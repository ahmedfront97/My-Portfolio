let up_icon = document.getElementById('up-icon');


// show up icon when scroll > 800px 



// window.addEventListener('scroll', function() {
//     if (document.body.scrollTop > 400) {
//       var currScrollPos2 = document.body.scrollTop;
//       document.getElementById('test').style.opacity = -currScrollPos2 / 400 + 2;
//     }
//   }
// };


// window.addEventListener('scroll' , function(){
//     console.log(my_scroll);
//     if(my_scroll > 800){
//         up_icon.style.opacity = '1';
//     }
// });
up_icon.style.opacity = "1";

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      up_icon.style.opacity = "1";
    } else {
      up_icon.style.opacity = "0";
    }
}


window.onscroll = function() {scrollFunction()};