function running(){
var r = document.getElementById("running");
var dg = 0;
setInterval(function(){
    dg+=15;
    r.style.transform = `rotate(${dg}deg`;
    
    if(dg>=360){
        dg+=10;
    }
}, 20);
}