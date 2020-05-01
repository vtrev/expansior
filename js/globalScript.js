//each page will have a seperate JS file to avoid some elements not being found in different pages.


document.addEventListener('DOMContentLoaded', function () {
    //sidenav
    var sideNavElement = document.querySelectorAll('.sidenav');
    var sideNavInstance = M.Sidenav.init(sideNavElement, {
        edge: 'right'
    });

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});

});