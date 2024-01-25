//Đây là ngôn ngữ logic
var x; // x không có kiểu dữ liệu = null
x = 10; // x: number
var y = "hello world" //y: string
var t = true // t: boolean

//Khai báo biến kiểu mới
let n = 20; 

var z = x + 10; // 20
z ="xinchao";
var z1 = x + y; // "10hello world"
var z2 = y + y; // "hello worldhello world"
var z3 = "20" + 10; // 2010
console.log(x+y+"20"+10);// "10hello world2010"


if(x>=10){

}else{

}

for(var i=0; i<10; i++){
    console.log("i"+i);
}

var arr = [];
arr[0] = 2;
arr[1] = "abc";

arr.push(135); // arr[2] = 135;
arr.push("hello"); // arr[3] = "hello"
console.log("Size of array"+arr.length);

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(e=>{
    console.log(e); // co the tu dat ten bien e 
})

function tinh_tong(a,b){
    //thích làm gì thì làm
    // return a + b;
    console.log(a+b);
}
tinh_tong(5,7);
tinh_tong(5,"ABC");

// alert("Yêu cầu phải trên 18 tuổi"); //Cảnh báo, void

// var tl = confirm("Bạn chắc chắn chưa"); //Boolean
// if(tl){
//     alert("người dùng đã chắc chắn với câu trả lời");
// }else{
//     alert("người dùng cần tìm hiểu thêm");
// }

// var kq = prompt("Bạn bao nhiêu tuổi"); //string "18"
// var kq2 = parseInt(kq) + 10; 
// alert("Sau 10 năm bạn đã "+kq2 + " tuổi");
/* khi sử dụng parseInt
    "18" => 18
    "18a" => 18
    "18a2" => 18
    "a18" => NAN (not a number)
*/

// var rd = Math.random(); // 0<rd<1 0.0029842794
// rd = rd * 100; // 0.01244 -> 1.244
// rd = parseInt(rd);
// console.log("số ngẫu nhiên là " +rd);
// Cho người dùng nhập vào 1 số bất kỳ trong khoảng từ 0 dến 99
// Sinh ra số ngẫu nhiên xem họ có trúng giải không
// var nhapso = prompt("Nhập một số từ 0 đến 99");
// nhapso = parseInt(nhapso);
// if(nhapso != rd){
//     alert("Chúc bạn may mắn lần sau");
// } else {
//     alert("Chúc mừng bạn đã trúng thưởng");
// }
/*
Tạo ra 1 bộ 23 số (0 -> 99)
Người chơi sẽ chọn 1 số mỗi lần, tối đa 7 lần chơi và số tiền đặt cược
của ngày hôm đó. (giả sử tỉ lệ là 23đ 1 điểm -> trúng đưuọc 80đ)
Sau 7 ngày hãy tính số tiền thu được.
*/
// Tu lam:
//var ari = [];
// for(var i=0; i<23; i++){
//     ari[i] = Math.random();
//     ari[i] = ari[i] * 100;
//     ari[i] = parseInt(ari[i]);
//     console.log("Số trúng thưởng thứ " + (i+1) + ": " + ari[i]);
// }
// var nhapso = [];
// var nhaptien = [];
// var count = 0;
// var tien_da_cuoc = 0;
// for(var i=1; i<8; i++){
//     nhapso[i-1] = prompt("Nhập số từ 0 đến 99 ngày " + i);
//     nhapso[i-1] = parseInt(nhapso);
//     nhaptien[i-1] = prompt("Nhập số tiền cược ngày " + i);
//     nhaptien[i-1] = parseInt(nhaptien);
//     tien_da_cuoc += nhaptien[i-1];
// }
// for(var i=0; i<7; i++){
//     for(var j=0; j<23; j++){
//         if(nhapso[i] == ari[j]){
//             count ++;
//         }
//     }
// }
// var tien_thang = count * 80;
// console.log("Số lần trúng: "+ count);
// console.log("Tổng số tiền đã thắng: " + tien_thang + "đ");
// console.log("Tổng số tiền đã đặt cược: " + tien_da_cuoc + "đ");

//chua
var st = 0;
var dt =0;
for(var i=1; i<=7; i++){
    var kq = [];
    for(var j=0; j<23; j++){
        var rd = Math.random() * 100;
        rd = parseInt(rd);
        kq.push(rd);
    }
    var lc  = prompt(`Nhap so muon dat hom nay (Ngay thu ${i})`);
    lc = parseInt(lc);
    var td = prompt(`Nhap so tien muon dat hom nay (Ngay thu ${i})`)
    td = parseInt(td);
    st += td;
    kq.forEach(e=>{
        if(e==lc){
            dt+= (td/23)*80;
        }
    })
}
alert(`Tong tien ban dau: ${st} va so tien thu duoc ${dt}`);

