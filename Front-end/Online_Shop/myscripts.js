/* When Click On MainMenu's Icon */
function indexmenu() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("open-icon");
    var another = document.getElementById("category");
    if (x.className === "nav-menu item") {
        x.className += " responsive";
        icon.setAttribute("src", "icons/menu_close.png");
        another.setAttribute("style", "display:none;")
    } else {
        x.className = "nav-menu item";
        icon.setAttribute("src", "icons/menu.png");
        another.setAttribute("style", "display:block;")
    }
}
/* <a> click effect */
document.onmousedown = function(event) {
    let target = event.target; // where was the click?
    if (target['localName'] == 'a') {
        target.classList.toggle('backchange');
    }
  }
  document.onmouseup = function(event) {
    let target = event.target; // where was the click?
     /* console.log(target);  */
    if (target['localName'] == 'a') {
        target.classList.toggle('backchange');
    }

    
}


/* When Click On CAtegory Icon */


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


/* DoropDown SubMenu */
let item;
function showNoShow(item) {
    document.getElementById(item).classList.toggle("show");
    /* Close Other submenu items */
    let sublist = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < sublist.length; i++) {
        x = sublist[i].classList.contains('show');
        if (x && sublist[i].attributes['id']['value'] != item) {
            sublist[i].classList.remove('show');
        }
    }
}

/* mouseover and up on menu */
let icon;
function menueffect(icon) {
    document.getElementById(icon).classList.toggle("opacity");
}

/* show category Side Bar on dektop view */

function showcatd() {
    document.getElementById("category").classList.toggle("show");
    console.log(document.getElementById("category"))
    document.getElementsByTagName("body")[0].classList.toggle("blur"); /* blur outside of sidebar */
}
/* Close the category if user click outside of it */

document.onclick = function (getpossition) {
    let categorySide = document.getElementById("category");
    console.log(categorySide["attributes"]["class"]["textContent"]);
    if (categorySide["attributes"]["class"]["textContent"].includes("show")) { /* if nav side bar is show */
        let target = getpossition.target;
        console.log(target);
        if (target["children"][0]["className"] !== "dropdown-content" || target["children"].length == 0) {  /* if click another section */
            console.log("sss");
            document.getElementById("category").classList.remove("show");
            document.getElementsByTagName("body")[0].classList.remove("blur"); /* end bluring */
        }
    }
}

/* for correct show count items of slider to diffrent view */
window.addEventListener("resize", getwidth);
var width = 0;
function getwidth() {
    width = window.outerWidth;
    let slides = document.getElementsByClassName("flex-item slider");
    if (width >= 768) {
        for (let i = 0; i < slides.length - 1; i++) {
            slides[i].style.display = "block";
        }
        slideIndex = 0;
    } else {
        slides[0].style.display = "block";
        for (let i = 1; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        slideIndex = 0;
    }
}


/* for button slider */
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
    } else {        /* it's for more than or equal 768 screen size */
        
        if (y === "next") {
            slides[slideIndex - 1].style.display = "none";
            if (slideIndex >= slides.length) {slideIndex = 0}
            var z = slideIndex;
            for (i = 0; i < 3; i++) {
                slides[z].setAttribute("style", "order:" + (i + 2) + ";");
                slides[z].style.display = "block";
                z += 1;
                if (z >= slides.length) {z = 0}
                
            }
        } else {
            slides[slideIndex + 1].style.display = "none";
            if (slideIndex < 0) {slideIndex = slides.length - 1}
            var z = slideIndex;
            for (i = 3; i > 0; i--) {
                slides[z].setAttribute("style", "order:" + (i + 2) + ";");
                slides[z].style.display = "block";
                z -= 1;
                if (z < 0) {z = slides.length - 1}
                
            }
        }

    }

}
/* Open just one details at the moment */
function details() {
    let x = document.getElementsByClassName("description");

    for (i = 0; i < x.length; i++) {
        let open = x[i].hasAttribute('open');
         if (open !== "true") {
            x[i].removeAttribute('open');
         } 
    }
}



