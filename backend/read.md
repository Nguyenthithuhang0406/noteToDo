db -> index.js 
tao model
route (nho route truyen vao 1 middleware funtion, middleware truyen vao route lay tu controler)
->xac thuc nguoi dung: -> tao route register (lay du lieu req.body -> simple validation -> check user existing 
    => hashpassword -> truyen cac truong du lieu tao new User, luu du lieu vao databse r tra ve;  
    ->tao mot token de xac thuc nguoi dung moi khi dang nhap)
->tao router login (lay du lieu req.body -> simple validation -> check user existing -> so sanh password -> tra ve du lieu, token)

-> post route
-> tạo bac bao ve middleware để private post, chỉ ai đăng nhập mới được tạo post => dua den noi can bao ve (/routes/post)

