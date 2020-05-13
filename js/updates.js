document.addEventListener('DOMContentLoaded', function () {




    function initCarousel() {
        var elems = document.querySelector('#stats-carousel');
        var instances = M.Carousel.init(elems, {
            fullWidth: true,
            padding: 0,
            shift:0
        });
    }

    var slide = () => {
        let carousel = document.getElementById('stats-carousel');
        instance = M.Carousel.getInstance(carousel);
        instance.next();
        setTimeout(slide, 2500);
    }

    var floatingBtn = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(floatingBtn, {})



    let moreZoomText = document.querySelector("#more-zoom-text");
    let moreZoomButton = document.querySelector("#readmore-zoom");

    moreZoomButton.addEventListener('click', (button) => {
        if (moreZoomButton.innerHTML === "Read more here") {
            moreZoomText.style.display = "inline-block";
            moreZoomButton.innerHTML = "Read less";
        } else {
            moreZoomButton.innerHTML = "Read more here";
            moreZoomText.style.display = "none";

        }
    })


    let moref2fText = document.querySelector("#more-f2f-text");
    let moref2fButton = document.querySelector("#readmore-f2f");

    moref2fButton.addEventListener('click', (button) => {
        if (moref2fButton.innerHTML === "Read more here") {
            moref2fText.style.display = "inline-block";
            moref2fButton.innerHTML = "Read less";
        } else {
            moref2fButton.innerHTML = "Read more here";
            moref2fText.style.display = "none";

        }
    })



    let morestatsText = document.querySelectorAll(".more-stats-text");
    let morestatsButton = document.querySelector("#readmore-stats");

    morestatsButton.addEventListener('click', (button) => {
        if (morestatsButton.innerHTML === "Read more here") {
            document.querySelector("#carousel-row").classList.remove("more-text");
            morestatsText.forEach(e => e.style.display = "inline-block");
            document.querySelector("#stats-carousel").classList.remove("more-text");
            //re initialize carousel and slide it
            initCarousel()
            slide()
            morestatsButton.innerHTML = "Read less";

        } else {
            document.querySelector("#stats-carousel").classList.add("more-text");
            morestatsButton.innerHTML = "Read more here";
            morestatsText.forEach(e => e.style.display = "none");

        }
    })

    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
})