function indexmenu() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("open-icon");
    var another = document.getElementById("category");
    if (x.className === "nav-menu item") {
        x.className += " responsive";
        icon.setAttribute("src", "icons/menu_close.png");
        /* icon.setAttribute("style", "margin:10px;"); */
        another.setAttribute("style", "display:none;")
    } else {
        x.className = "nav-menu item";
        /* icon.textContent = "مشاهده منو"; */
        icon.setAttribute("src", "icons/menu.png");
        another.setAttribute("style", "display:block;")
    }
}

/*  */


function category() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("catg-icon");
    var another = document.getElementById("index-menu");
    if (x.className === "nav-menu item") {
        x.className += " responsive";
        icon.setAttribute("src", "icons/close.png");
        /* icon.setAttribute("style", "margin:10px;"); */
        another.setAttribute("style", "display:none;")
    } else {
        x.className = "nav-menu item";
        icon.setAttribute("src", "icons/application.png");
        another.setAttribute("style", "display:block;")
    }
}

/*  */


/* var element = document.getElementById('one-product');
       style = window.getComputedStyle(element);
       displayvalue = style.getPropertyValue('display');
        */

/* let slideIndex = 0;
showSlides(slideIndex);
function changeslide(id) {
    showSlides(slideIndex += id);
}
function showSlides(id) {
    let slides = document.getElementsByClassName("flex-item slider");
    if (id >= slides.length) { slideIndex = 0 }
    if (id < 0) { slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
*/


/* for correct show count items of slider to diffrent view */
window.addEventListener("resize", getwidth);
var width = 0;
var countOfSlide = 1;
function getwidth() {
    width = window.outerWidth;
    let slides = document.getElementsByClassName("flex-item slider");
    if (width >= 768) {
        for (i = 0; i < slides.length - 1; i++) {
            slides[i].style.display = "block";
        }
        slideIndex = 0;
        countOfSlide = 3;
    } else {
        for (i = 1; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        slideIndex = 0;
        countOfSlide = 1;
    }
}


/* for mobie viwe of button slider */
let slideIndex = 0;
function next() {
    slideIndex += 1
    showSlides("next");
}
function previous() {
    slideIndex -= 1;
    showSlides("previous");
}


function showSlides(y) {
    let slides = document.getElementsByClassName("flex-item slider");
    width = window.outerWidth;
    /* console.log(slides.length); */
    /* Check screen size for type of next and previous behavior */
    if (width < "768") {
        if (slideIndex >= slides.length) {
            slides[slideIndex - 1].style.display = "none";
            slideIndex = 0
            slides[slideIndex].style.display = "block";
            return;
        }
        if (slideIndex < 0) {
            slides[slideIndex + 1].style.display = "none";
            slideIndex = slides.length - 1
            slides[slideIndex].style.display = "block";
            return;
        }

        if (y === "next") {
            slides[slideIndex].style.display = "block";
            slides[slideIndex - 1].style.display = "none";
        } else {
            if (y === "previous") {
                slides[slideIndex].style.display = "block";
                slides[slideIndex + 1].style.display = "none";
            }

        }
    } else {
        
        if (y === "next") {
            slides[slideIndex - 1].style.display = "none";
            console.log(slides[slideIndex]);
            if (slideIndex >= slides.length) {slideIndex = 0}
            var z = slideIndex;
            for (i = 0; i < 3; i++) {
                slides[z].setAttribute("style", "order:" + (i + 2) + ";");
                slides[z].style.display = "block";
                console.log(slides[z]);
                z += 1;
                if (z >= slides.length) {z = 0}
                
            }
        } else {
            slides[slideIndex + 1].style.display = "none";
            console.log(slides[slideIndex]);
            if (slideIndex < 0) {slideIndex = slides.length - 1}
            var z = slideIndex;
            for (i = 3; i > 0; i--) {
                slides[z].setAttribute("style", "order:" + (i + 2) + ";");
                slides[z].style.display = "block";
                console.log(slides[z]);
                z -= 1;
                if (z < 0) {z = slides.length - 1}
                
            }
        }

    }

}


/* 
 */