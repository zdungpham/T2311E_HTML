var so_mua = [];
var ket_qua = [];
var count = 0;

for(var i=0;ket_qua.length < 6;i++){
    var rd = Math.random() * 46;
    rd = parseInt(rd);
        if (!ket_qua.includes(rd)) {
            ket_qua.push(rd);
          }
    
    console.log("Số thứ " + (i+1) + " là " + ket_qua[i]);
}

for(var i=0; i<6; i++){
    so_mua[i] = prompt(`Nhập số muốn mua từ 0 đến 45`);
    so_mua[i] = parseInt(so_mua[i]);
    for(var j=0; j<6 ;j++){
        if(so_mua[i] == ket_qua[j]){
            count++;
            console.log(count);
        }
    }
}
switch(count){
    case 0:
        alert("Không trúng giải");
        break;
    case 1:
        alert("Không trúng giải");
        break;
    case 2:
        alert("Không trúng giải");break;
    case 3:
        alert("Bạn đã trúng 100.000VND");break;
    case 4:
        alert("Bạn đã trúng 10.000.000VND");   break; 
    case 5:
        alert("Bạn đã trúng 100 ty VND");break;
    case 6:
        alert("Bạn đã trúng 100 ty VND");break;
    }

