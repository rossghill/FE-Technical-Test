var mobileNav = document.getElementsByClassName('mobile-nav')


mobileNav[0].addEventListener("click", function(){
    var menu = document.querySelector('ul')
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

})