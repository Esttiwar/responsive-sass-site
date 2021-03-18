let num = 1;
const imageDesktop = "/images/desktop-image-hero";
const imageMobile ="/images/mobile-image-hero";

function sizeScreen() {
    const width = document.querySelector("body").clientWidth;
    if (width > 375) {
        return imageDesktop
    }
    return imageMobile
}

function right() {
    num++;
    if (num > 3) {
        num = 1;   
    }
    let $rightArrow = document.querySelector(".main__fondo");
    $rightArrow.src=sizeScreen()+num+".jpg"; 
}

function left() {
    num--;
    if (num < 1) {
        num = 3;
    }
    let $leftArrow = document.querySelector(".main__fondo");
    $leftArrow.src=sizeScreen()+num+".jpg";
}


function burguer(){
   document.querySelector(".main__burguer").style.display = "none";
   document.querySelector(".main__x").style.display = "inline";
   document.querySelector(".main__nav").style.display = "inline";
   document.querySelector(".main__logo").style.display = "none";
   document.querySelector(".main__background-mobile").style.display = "block";
   document.querySelector(".container__up").style.backgroundColor = "rgba(0,0,0,0.6)";
   document.querySelector(".container__down").style.backgroundColor = "rgba(0,0,0,0.6)";
   document.querySelector(".base-img-right").style.backgroundColor = "rgba(0,0,0,0.6)";
   document.querySelector(".text__arrow-slice").style.backgroundColor = "rgba(0,0,0,0.6)";
   document.querySelector(".arrow__slice-inside-left").style.backgroundColor = "rgba(0,0,0,0.6)";
   document.querySelector(".arrow__slice-inside-right").style.backgroundColor = "rgba(0,0,0,0.6)";
}

function menuX(){
    document.querySelector(".main__burguer").style.display = "inline";
    document.querySelector(".main__x").style.display = "none";
    document.querySelector(".main__nav").style.display = "none";
    document.querySelector(".main__logo").style.display = "inline";
    document.querySelector(".main__background-mobile").style.display = "none";
    document.querySelector(".container__up").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.querySelector(".container__down").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.querySelector(".base-img-right").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.querySelector(".text__arrow-slice").style.backgroundColor = "black";
    document.querySelector(".arrow__slice-inside-left").style.backgroundColor = "rgba(0,0,0,0.0)";
    document.querySelector(".arrow__slice-inside-right").style.backgroundColor = "rgba(0,0,0,0.0)";
}
