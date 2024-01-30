// setTimeout(function(){
//     alert("Hello everybody");
// },2000); // delay 2000ms

//Tu lam dieu chinh de dem nguoc hien o trong trang thay vi trong console
// var timer = document.getElementById("timer");
// var min = 10, sec  = 0;
// var k = setInterval(function(){
    
//     if(min == 0 && sec == 0){
//         clearInterval(k);
//     }
//     if(min < 10 && sec >= 10){
//         timer.innerText = "0" +min+ ":" +sec
//     } else
//     if(min<10 && sec <10){
//         timer.innerText = "0" +min+ ":0" +sec
//     } else {
//         timer.innerText = min+ ":0" + sec
//     }
//     if(sec == 0){
//         min--;
//         sec = 60;
//     }
    
//     sec--;
// },100);

//hoac them id vao the span
// var timer1 = document.getElementById("timer1");
// var timer2 = document.getElementById("timer2");
// var min = 10, sec = 0;
// var l = setInterval(function(){
//     timer1.innerText = min
//     timer2.innerText = sec;
//     sec--;
//     if(sec<0){
//         min--;
//         sec=59;
//     }
//     if(min<0){
//         clearInterval(l);
//     }
// }, 100);



// var h = document.getElementById("number");
// //h.innerText = "XIN CHAO CAC BAN"
// h.innerHTML = "<i>HELLO</i>";
// var colors = ["green", "red", "orange", "deeppink"];
// var t=10
// var it = setInterval(function(){
//     //alert("Hello T2311E");
//     // console.log(t);
//     //h.innerText = t;
//     h.innerHTML += `<li>${t}</li>`;
//     var rd = Math.random()*4;
//     rd = parseInt(rd);
//     var c = colors[rd];
//     var bg = colors[4-rd];
//     h.style.backgroundColor = bg;
//     h.style.color = c;
//     t--;
//     if(t<0){
//         clearInterval(it);
//     }
// },2000); //sau 2000 ms se thuc hien 1 lan vo han

//viet dong ho dem nguoc
// var min = 10, sec  = 0;
// var it = setInterval(function(){
    
//     if(min == 0 && sec == 0){
//         clearInterval(it);
//     }
//     if(min < 10 && sec >= 10){
//         console.log(`0${min} : ${sec}`);
//     } else
//     if(min<10 && sec <10){
//         console.log(`0${min} : 0${sec}`);
//     } else {
//         console.log(`${min} : 0${sec}`);
//     }
//     if(sec == 0){
//         min--;
//         sec = 60;
//     }
    
//     sec--;
// },10);

//lam cho doan khoi quay 
var quay = document.getElementById("quay");
var dg = 0;
setInterval(function(){
    dg+=15;
    quay.style.transform = `rotate(${dg}deg`;
    
    if(dg>=360){
        dg=0;
    }
}, 1);
