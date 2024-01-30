var fs;
var speed = 10;
function fan(){
var f = document.getElementById("fan");
var dg = 0;
fs = setInterval(function(){
    dg+=15;
    f.style.transform = `rotate(${dg}deg`;
    
    if(dg>=360){
        dg+=speed;
    }
}, 20);
}
function stopFan(){
    clearInterval(fs);
}
