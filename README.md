� Hệ thống Đăng nhập thông 
Course Registration System — Documentation &amp; Architecture

Dự án giao diện Web tĩnh (Single Page Application - SPA) hỗ trợ đăng nhập và quản lý đăng ký
môn học cho sinh viên, tích hợp lưu trữ phiên làm việc qua JWT Token kết nối với Backend
REST API.

�� Cấu trúc Thư mục Dự án
├── css/
│ └── style.css # Định kiểu giao diện chung, hiệu ứng và hình nền
├── js/
│ └── login.js # Xử lý tương tác form đăng nhập và gọi REST API
├── dashboard.html # Giao diện trang chủ quản lý sau khi đăng nhập thành công
├── index.html # Giao diện trang đăng nhập chính
└── README.md # Tài liệu hướng dẫn và giải thích dự án

⚙️ Chi tiết Chức năng từng Tệp
1. index.html (Trang Đăng nhập)
 Chứa biểu mẫu cho phép người dùng nhập Tên đăng nhập và Mật khẩu.
 Tích hợp nút ẩn/hiện mật khẩu giúp người dùng dễ dàng kiểm tra thông tin nhập.
 Hiển thị trạng thái tải (Loading) và các thông báo lỗi/thành công linh hoạt.
2. dashboard.html (Trang Quản lý)
 Kiểm tra quyền truy cập: Tự động kiểm tra accessToken trong localStorage. Nếu chưa
đăng nhập, hệ thống sẽ tự động chuyển hướng người dùng về trang index.html.
 Hiển thị bảng điều khiển trung tâm gồm các lối tắt quản lý: Đăng ký môn học, Thông tin
sinh viên, và Kỳ đăng ký.
 Đăng xuất: Xóa toàn bộ Token (accessToken, refreshToken, tokenType) khỏi lưu trữ trình
duyệt và đưa người dùng trở lại màn hình đăng nhập.
3. css/style.css (Định kiểu Giao diện)
 Sử dụng hình nền trường đại học phủ tràn màn hình (Background Cover) kèm lớp phủ tối
(Overlay) giúp làm nổi bật khung đăng nhập.

 Đảm bảo tính tương thích tốt trên các thiết bị di động và máy tính (Responsive Design).
 Tích hợp các hiệu ứng mượt mà như chuyển cảnh (Transition), hiển thị êm (Fade-in
Animation), và biểu tượng xoay khi chờ xử lý (Spin Loading).
4. js/login.js (Kịch bản Xử lý)
 Kết nối Backend: Gửi yêu cầu POST chứa thông tin tài khoản đến API backend tại
http://localhost:8080/api/auth/login.
 Lưu trữ Token: Khi đăng nhập thành công, tự động trích xuất và lưu accessToken,
refreshToken vào localStorage của trình duyệt.
 Xử lý trải nghiệm: Bắt sự kiện bấm phím Enter để gửi form nhanh và hiển thị thông báo
phản hồi từ Server khi đăng nhập thất bại.
Hướng dẫn Chạy Dự án
1. Chạy Frontend: Mở trực tiếp file index.html bằng trình duyệt web hoặc sử dụng extension
Live Server trên Visual Studio Code.
2. Kết nối Backend: Đảm bảo ứng dụng backend (Spring Boot) đang chạy ở địa chỉ
http://localhost:8080.
