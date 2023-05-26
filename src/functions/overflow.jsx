function overflowHidden() {

    document.body.style.overflow = "hidden";
    
    window.scrollTo(0, 0);

}

function overflowAuto() {
    
    document.body.style.overflow = "auto";

}

export {

    overflowAuto, 

    overflowHidden

};