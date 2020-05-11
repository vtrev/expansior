document.addEventListener('DOMContentLoaded', function () {


    let moreZoomText = document.querySelector("#more-incentives-text");
    let moreZoomButton = document.querySelector("#readmore-incentives-btn");

    moreZoomButton.addEventListener('click', (button) => {
        if (moreZoomButton.innerHTML === "Read more here") {
            moreZoomText.style.display = "inline-block";
            moreZoomButton.innerHTML = "Read less";
        } else {
            moreZoomButton.innerHTML = "Read more here";
            moreZoomText.style.display = "none";

        }
    })

    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

});