function onMenu() {
    document.getElementById("menu").classList.toggle("show")
    window.onclick=function(t) {
        if(!t.target.matches(".drop-menu")){
            var n=document.getElementById("menu");n.classList.contains("show")&&n.classList.remove("show")
        }
    };
}