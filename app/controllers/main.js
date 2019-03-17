$(document).ready(function(){

    var nguoiDungSerVice = new NguoiDungService();
    layDanhSachNguoiDung();
    $('#btnThemNguoiDung').click(function(){
        $('.modal-title').html('Thêm mới người dùng');

        var footer = ` 
        <button id="btnThem" class="btn btn-success">Thêm</button>
        <button id="btnThoat" class="btn btn-danger" data-dismiss=modal>Thoát</button>

        `
        $('.modal-footer').html(footer);
        
    })



    $('body').delegate("#btnThem",'click',function(){
       
        var taiKhoan =$('#TaiKhoan').val();
        var matKhau =$('#MatKhau').val();
        var hoTen =$('#HoTen').val();
        var email = $('#Email').val();
        var soDT =$('#SoDienThoai').val();
        var loaiNguoiDung =$('#loaiNguoiDung').val();

        var nguoiDung = new NguoiDung(taiKhoan,matKhau,hoTen,email,soDT,loaiNguoiDung);
        nguoiDungSerVice.ThemNguoiDung(nguoiDung);
        console.log(nguoiDung);

        

    })

    $('body').delegate("#btnSua","click",function(){
        // DOM tới data xóa
        var taiKhoan = $(this).data('taikhoan');
        console.log(taiKhoan);
        var thongTinNguoiDung = nguoiDungSerVice.LayThongTinNguoiDung(taiKhoan);
        
        thongTinNguoiDung.map(function(item){
            $('#TaiKhoan').val(item.TaiKhoan);
            $('#MatKhau').val(item.MatKhau);
            $('#HoTen').val(item.HoTen);
            $('#Email').val(item.Email);
            $('#SoDienThoai').val(item.SoDT);
            $('#loaiNguoiDung').val(item.MaLoaiNguoiDung);
        })
        $('.modal-title').html('Cập nhật mới người dùng');

        var footer = ` 
        <button id="btnCapNhat" class="btn btn-success">Cập Nhật</button>
        <button id="btnThoat" class="btn btn-danger" data-dismiss=modal>Thoát</button>

        `
        $('.modal-footer').html(footer);

       
        
    })
    $('body').delegate('#btnCapNhat','click',function(){
        var taiKhoanID =$('#TaiKhoan').val();
        var matKhau =$('#MatKhau').val();
        var hoTen =$('#HoTen').val();
        var email = $('#Email').val();
        var soDT =$('#SoDienThoai').val();
        var loaiNguoiDung =$('#loaiNguoiDung').val();

        var nguoiDung = new NguoiDung(taiKhoanID,matKhau,hoTen,email,soDT,loaiNguoiDung);
        nguoiDungSerVice.CapNhatNguoiDung(nguoiDung);
    })
    $('body').delegate('#btnXoa','click',function(){
        // DOM tới data xóa
        var taiKhoan = $(this).data('taikhoan');
        console.log(taiKhoan);
        
        nguoiDungSerVice.XoaNguoiDung(taiKhoan);
        
    })

    function layDanhSachNguoiDung(){
        nguoiDungSerVice.LayDanhSachNguoiDung();
    }
   
})