document.addEventListener('DOMContentLoaded', function () {
    var dots = document.querySelector("#dots");
    var moreText = document.querySelector("#more");
    var btnText = document.querySelector(".btn-white");

    //define a function called readMore 
    btnText.addEventListener('click', () => {
        if (dots.style.display === "none") {
            dots.style.display = "inline-block";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline-block";
        }
    })
    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
    //carousel

})