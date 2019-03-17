function NguoiDungService(){
    this.LayDanhSachNguoiDung = function(){
        $.ajax({
            // url Back-End cung cấp , GET hay POST thì Back-end sẽ ghi rõ
            // có tham số thì thêm thuộc tính data : 
            url : "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type : "GET" ,
        })
        .done(function(danhSachNguoiDung){
            console.log(danhSachNguoiDung);
            LoadDuLieu(danhSachNguoiDung);
        })
        .fail(function(err){
            console.log(err);
        })
    }
    this.ThemNguoiDung = function(nguoiDung){
        $.ajax({
            url : "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type : "POST",
            data : nguoiDung,
        })
        .done(function(result){
            // Tự refresh trang 
            if(result==="tai khoan da ton tai !"){
                alert("Tài khoản đa tồn tại");
            }
            else{            
                location.href ="";

            }
        })
        .fail(function(err){
            console.log(err);
        })
    }
    this.XoaNguoiDung = function(taiKhoan){
        $.ajax({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type : "DELETE",
            //data : taiKhoan,
        })
        .done(function(result){
            // Tự refresh trang 
            location.href ="";
        })
        .fail(function(err){
            console.log(err);
        })
    }
    this.LayThongTinNguoiDung = function(taiKhoan){
        var thongTinNguoiDung = [];
        $.ajax({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${taiKhoan}`,
            type : "GET",
            // Ajax là bất đồng bộ , nên async : false là đồng bộ . 
            async : false,
            //data : taiKhoan,
        })
        .done(function(result){
            thongTinNguoiDung = result
           console.log(result);
           
        })
        .fail(function(err){
            console.log(err);
        })
        console.log(thongTinNguoiDung);
        return thongTinNguoiDung;
        
    }
    this.CapNhatNguoiDung = function(nguoiDung){
        var nguoiDungJson = JSON.stringify(nguoiDung);
        $.ajax({
            url : `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
            type : "PUT",
            contentType : `application/json`,
            dataType : "json",
            data : nguoiDungJson
        })
        .done(function(result){
            location.href="";
               console.log(result);
           
        })
        .fail(function(err){
            console.log(err);
        })
    }
}
function LoadDuLieu(danhSachNguoiDung){
    var tblBody = "";
    // Vòng lặp map : 
    // item : là 1 object trong mảng , index giống for ( index = 0 ; )
    danhSachNguoiDung.map(function (item, index) {
        tblBody += `<tr>
        <td>${index + 1}</td>
        <td>${item.TaiKhoan}</td>
        <td>${item.MatKhau}</td>
        <td>${item.HoTen}</td>
        <td>${item.Email}</td>
        <td>${item.SoDT}</td>
        <td>${item.TenLoaiNguoiDung}</td>
        <td><button id='btnSua' class='btn btn-primary' data-toggle='modal' data-target="#myModal" data-taikhoan='${item.TaiKhoan}'>Sửa</button><button id='btnXoa' class='btn btn-danger' data-taikhoan='${item.TaiKhoan}'>Xóa</button></td>
    </tr>`
    })
    $("#tblDanhSachNguoiDung").html(tblBody);
    
}