/**
 * Bài 1
 * - Đầu vào:
 * + Trình xuất 3 số theo thứ tự tăng dần
 * - Xử lý
 * + Gọi a, b, c lần lượt là 3 số nguyên
 * - Đầu ra
 * + Show kết quả
 * 
 * - 
 */

document.getElementById("tangdan").onclick = function() {
    var a = document.getElementById("soNguyena").value;
    var b = document.getElementById("soNguyenb").value;
    var c = document.getElementById("soNguyenc").value;
    var soLon = "";
    if(c < b < a){
        soLon = c < b < a;
        // console.log(a < b);
    }else if(b < c < a){
        soLon = b < c < a;
        // console.log(a < c);

    }else if(b < a < c){
        soLon = b < a < c;
        // console.log(b < c);
    }else if(c < a < b) {
        soLon = c < a < b;
        // console.log(a > b > c);
    }else if(a < c < b){
        soLon = a < c < b;

    }else{
        soLon = a < b < c;
    }

    document.getElementById("soNguyen").innerHTML = soLon;

}

/**
 * Bài 2
 * - Đầu vào
 * + Viết trương trình chào hỏi
 * - Xử lý
 * + Giả sử
 *   +Bố (B)
 *   +Mẹ (M)
 *   +Anh Trai (A)
 *   +Chị gái (C)
 * - Đầu ra
 * Show kết quả
 */

document.getElementById("loiChao").onclick = function (){
    var B = document.getElementById("b").value;
    var M = document.getElementById("m").value;
    var A = document.getElementById("a").value;
    var C = document.getElementById("c").value;
    var chao = "";
    if(B){
        chao = "Xin chào bố";

    }else if(M){
        chao = "Xin chào mẹ";
    }else if(A){
        chao = "Xin chào anh trai";
    }else{
        chao = "Xìn chào chị gái";
    }
    document.getElementById("hi").innerHTML = chao;

}


/**
 * Bài 3 
 * - Đầu vào
 * + Đếm số chắn lẻ
 * - Xử lý
 * + Tạo biến chứa giá trị khi đếm
 * - Đầu ra
 * show kết quả
 * 
 */

document.getElementById("chanLe").onclick = function(){
    var a = document.getElementById("soThu1").value;
    var b = document.getElementById("soThu2").value;
    var c = document.getElementById("soThu3").value;

    var Countchan = 0;
    var Countle = 0;
  
    function kiemTraChanLe (number) {
        if(number%2 === 0) return true
        return false
    }

    if(kiemTraChanLe(a)){
        Countchan++
    }else {
        Countle++
    }

    if(kiemTraChanLe(b)){
        Countchan++
    }else {
        Countle++
    }

    if(kiemTraChanLe(c)){
        Countchan++
    }else {
        Countle++
    }



    document.getElementById("footer").innerHTML = "Có " + Countchan + " số chẵn, " + Countle + " số lẻ";

}



/**
 * Bài 4
 * - Đầu vào
 * + Nhập 3 cạnh của tam giác
 * - Xử lý
 * + Gọi a b c là 3 cạnh của tam giác
 * - Đầu ra
 * Show kết quả
 * 
 */

document.getElementById("btnduDoan").onclick = function (){
    var a = document.getElementById("canhA").value;
    var b = document.getElementById("canhB").value;
    var c = document.getElementById("canhC").value;
    var TamGiac = "";
    
    if((a == b) && (b == c)){
        TamGiac = "Tam giác đều";

    }else if(a == b ||a == c || b == c){
        TamGiac = "Tam giác cân"
    }else if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c){
        TamGiac = "Tam giác vuông"

    }else{
        TamGiac = "Tam giác khác";
    }

    document.getElementById("tamGiac").innerHTML = TamGiac;


}