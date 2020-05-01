 document.addEventListener('DOMContentLoaded', function () {
     var elems = document.querySelectorAll('.carousel');
     var instances = M.Carousel.init(elems, {
         dist: 0,
         padding: 60,
         numVisible: 8,
         duration: 200,
     });

     var elems = document.querySelectorAll('.parallax');
     var instances = M.Parallax.init(elems, {});

     var slide = () => {
         let carousel = document.getElementById('home-carousel');
         instance = M.Carousel.getInstance(carousel);
         instance.next();
         setTimeout(slide, 4000);
     }
     slide()


 });