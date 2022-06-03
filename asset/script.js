//Ẩn - hiện menu:
    //querySelector() sẽ trả về phần tử đầu tiên trong tập hợp các kết quả được tìm thấy bởi CSS selector được cung cấp khi gọi phương thức.
    //querySelectorAll() trả về tất cả các phần tử được tìm thấy
function openMenu(){
    var x = document.getElementById("nav");
    if(x.style.left == "100%") {
        x.style.left = "0%";
    }else{
        x.style.left = "100%"
    }
}


//Show cart
//function openListCart(){
    //document.getElementById("listCart").style.width = "auto";
    /*var y = document.getElementById("listCart");
    if(y.style.width == "0") {
        y.style.width = "auto";
    }else{
        y.style.width = "0";
    }
    showcart();
}
function closeCart(){
    document.getElementById("listCart").style.width = "0";
}
/*
function showcountsp() {
    document.getElementById("countsp").innerHTML = cart.length;
}

var cart = new Array();
function addToCart(x){
    var item = x.parentElement.children;
    var hinh = item[0].children[0].src;
    var namesp = item[1].innerText;
    var price = item[2].children[0].innerText;
    var number = item[3].value;
    var sp = new Array(hinh, namesp, price, number);

    cart.push(sp);
    console.log(cart);
    showcountsp();

    //lưu giỏ hàng lên sesionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function showmycart(){
    var ttgh="";
    var tong= 0;
    for(let i=0; i<cart.length; i++){
        var tt = parseInt(cart[i][2]) * parseInt(cart[i][3]);
        ttgh+='<tr>'
                    '<td>'+(i+1)+'</td>'+
                    '<td><img src="'+ cart[i][0] +'" alt=""></td>'+
                    '<td>'+ cart[i][1] +'</td>'+
                    '<td>'+ cart[i][2] +'</td>'+
                    '<td>'+ cart[i][3] +'</td>'+
                    '<td>'+
                        '<div>'+tt+'</div>'+
                    '</td>'+
                '</tr>';
            
    }
    ttgh +='<tr>'+
                '<th colspan="5">Tổng đơn hàng</th>'+
                '<th>'+
                    '<div>'+tong+'</div>'+
                '</th>'+
            '</tr>';
    
    document.getElementById("mycart").innerHTML = ttgh;

}*/

//Slide - store
 //khai báo biến slideIndex đại diện cho slide hiện tại
 var slideIndex;
 // KHai bào hàm hiển thị slide
 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex].style.display = "block";  
     dots[slideIndex].className += " active";
     //chuyển đến slide tiếp theo
     slideIndex++;
     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
     if (slideIndex > slides.length - 1) {
       slideIndex = 0
     }    
     //tự động chuyển đổi slide sau 5s
     setTimeout(showSlides, 3000);
 }
 //mặc định hiển thị slide đầu tiên 
 showSlides(slideIndex = 0);


 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

//Store item
/* Đầu tiên mình sẽ lấy tất cả các button và các thẻ div hiện thị nội dung dựa vào class.
Tiếp đến mình sẽ khai báo hàm showContent để hiển thị thể div chưa nội dung dựa vào id được truyền vào, 
trong hàm này trước hết mình ẩn hết tất cả các thẻ div chứa nội dung, sau đó chỉ hiện thị thẻ chưa nội dung có id được truyền vào hàm.
Sau khi đã có hàm showContent mình tiếp tục gán sự kiện onclick cho tất cả các buttons đã lấy ở trên, 
button nào được click sẽ được thêm class="active" và gọi hàm showContent với id là nội dung của button đó.
Cuối cùng mình gọi hàm showContent với id là PHP để mặc định hiển thị tab PHP.
*/
// show item
var buttons = document.getElementsByClassName('tablinks');
var contents = document.getElementsByClassName('tabcontent');
function showContent(id){
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        var id = this.textContent;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.className += " active";
        showContent(id);
    });
}
showContent('EARD');
//Validate register email

function regis(){
    var email =document.getElementById("input-mail").value;
    var mailformat = /^[a-zA-Z0-9.!#$&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email == "" || !mailformat.test(email)) {

        alert('Có chút lỗi nhỏ! Bạn vui lòng kiểm tra lại email nhé')
    } else{
       
        alert('Bạn đã đăng ký thành công, kiểm tra email nhé!')
    }
    
}

// script mới

//Cài đặt mặc định
//document.getElementsById("showcart").style.width = "0";

var giohang = new Array();

function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong =boxsp[3].value;
    var sp = new Array(hinh, gia, tensp, soluong);

    //kiem tra trong gio hang
    var kt = 0;//tạo biến kiểm tra
    for (let i = 0; i < giohang.length; i++){ 
        if (giohang[i][2] == tensp){ 
            kt = 1;
            soluong = parseInt(soluong) + parseInt(giohang[i][3]); //giá trị số lượng mới
            giohang[i][3] = soluong; // cập nhật số lượng vào trong giỏ
            break;
        }
    }
    if (kt==0){
    //them moi
    giohang.push(sp);
    } 

    //console.log(giohang);
    showcountsp();

    //lưu giỏ hàng lên sesionStorage
    sessionStorage.setItem("giohang",JSON.stringify(giohang));
}

function showmycart(){
    var ttgh="";
    var tong= 0;
    for(let i=0; i<giohang.length; i++){
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh += '<tr>'+
                    '<td>'+(i+1)+'</td>'+
                    '<td><img src="'+ giohang[i][0] +'" alt=""></td>'+
                    '<td>'+ giohang[i][2] +'</td>'+
                    '<td>'+ giohang[i][1] +'</td>'+
                    '<td>'+ giohang[i][3] +'</td>'+
                    '<td>'+
                        '<div>'+tt+'</div>'+
                    '</td>'+
                    '<td>'+
                    '<button onclick="xoasp(this)">Xóa</button>'+
                '</td>'+
                '</tr>';
            
    }
    ttgh +='<tr>'+
                '<th colspan="6">Tổng đơn hàng</th>'+
                '<th>'+
                    '<div>'+tong+'</div>'+
                '</th>'+
            '</tr>';
    
    document.getElementById("mycart").innerHTML = ttgh;

}

function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}

function xoasp(x) {
    // Xóa tr trước
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();
    //alert(tensp)
    //Xóa sp trong mảng
    for (let i=0; i<giohang.length;i++){
        if(giohang[i][2]==tensp){
            giohang.splice(i, 1);
        }
    }
    //console.log(giohang);
    showmycart(); //cập nhật lại giỏ hàng
    showcountsp()
}

function xoatatca(){
    giohang = [];
    showmycart();
    showcountsp();
}

function showcart(){
    //document.getElementById("showcart").style.display = 'none'
    var x = document.getElementById("showcart");
    if(x.style.right === "100%"){
        x.style.right = "0%";
    } else{
        x.style.right="100%"
    }
    
    showmycart();
}

function showgiohang_trangthanhtoan(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);

    var ttgh="";
    var tong= 0;
    for(let i=0; i<giohang.length; i++){
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh += '<tr>'+
                    '<td>'+(i+1)+'</td>'+
                    '<td><img src="'+ giohang[i][0] +'" alt=""></td>'+
                    '<td>'+ giohang[i][2] +'</td>'+
                    '<td>'+ giohang[i][1] +'</td>'+
                    '<td>'+ giohang[i][3] +'</td>'+
                    '<td>'+
                        '<div>'+tt+'</div>'+
                    '</td>'+
                '</tr>';
            
    }
    ttgh +='<tr>'+
                '<th colspan="5">Tổng đơn hàng</th>'+
                '<th>'+
                    '<div>'+tong+'</div>'+
                '</th>'+
            '</tr>';
    
    document.getElementById("mycart").innerHTML = ttgh;
}

function dongydatgang(){
   var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;

    var nguoinhan = new Array(hoten, diachi, dienthoai, email);
    console.log(nguoinhan);
    sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));
//chuyển trang
window.location.assign("donhang.html")

}

// trang đơn hàng
function showthongtinnguoinhan()
{
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);
    var tt = '<tr>'+
            '<td width="20%">Họ tên</td>'+
            '<td>' +thongtin[0] + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Địa chỉ</td>'+
            '<td>' +thongtin[1] + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Điện thoại</td>'+
            '<td>' +thongtin[2] + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Email</td>'+
            '<td>' +thongtin[3] + '</td>'+
        '</tr>';
        document.getElementById("thongtinnhanhang").innerHTML = tt;
}


