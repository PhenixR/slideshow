function prepareSlideshow() {
    var slidepic = document.getElementById("slidepic");
    slidepic.style.position = "absolute";
    slidepic.style.left = "0px";
    slidepic.style.left = "0px";
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("slidepic",-100,0,10)
    }
    links[1].onmouseover = function() {
        moveElement("slidepic",-200,0,10)
    }
    links[2].onmouseover = function() {
        moveElement("slidepic",-300,0,10)
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareSlideshow)