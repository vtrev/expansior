document.addEventListener('DOMContentLoaded', function () {

    // //parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

    let moreMembers = document.querySelector("#more-members");
    let moreMembersButton = document.querySelector("#more-members-button");

    moreMembersButton.addEventListener('click', () => {
        console.log(moreMembersButton.innerHTML);

        if (moreMembersButton.innerHTML === "See more") {

            moreMembers.style.display = "block";
            moreMembersButton.innerHTML = "See less";
        } else {
            moreMembersButton.innerHTML = "See more";
            moreMembers.style.display = "none";

        }
    })
})