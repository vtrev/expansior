document.addEventListener('DOMContentLoaded', function () {
    var moreText = document.querySelector("#more-refer-text");
    var readMoreButton = document.querySelector("#more-refer-btn");


    readMoreButton.addEventListener('click', () => {
        if (readMoreButton.innerHTML === "Read more here") {
            moreText.style.display = "inline-block";
            readMoreButton.innerHTML = "Read less";
        } else {
            readMoreButton.innerHTML = "Read more here";
            moreText.style.display = "none";

        }
    })
    
    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

})