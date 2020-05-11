document.addEventListener('DOMContentLoaded', function () {


    let moreIncentivesText = document.querySelector("#more-incentives-text");
    let moreIncentivesBtn = document.querySelector("#readmore-incentives-btn");

    moreIncentivesBtn.addEventListener('click', (button) => {
        if (moreIncentivesBtn.innerHTML === "Read more here") {
            moreIncentivesText.style.display = "inline-block";
            moreIncentivesBtn.innerHTML = "Read less";
        } else {
            moreIncentivesBtn.innerHTML = "Read more here";
            moreIncentivesText.style.display = "none";

        }
    })

    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
    
    let moreTables = document.querySelector("#more-tables");
    let moreTablesBtn = document.querySelector("#more-tables-btn");

    moreTablesBtn.addEventListener('click', () => {
        if (moreTablesBtn.innerHTML === "Show all plans") {
            moreTables.style.display = "inline-block";
            moreTablesBtn.innerHTML = "Show less plans";
        } else {
            moreTablesBtn.innerHTML = "Show all plans";
            moreTables.style.display = "none";

        }
    })


});