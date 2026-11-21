# Hướng dẫn nối Supabase cho 舒如天上星

Làm 1 lần, khoảng 20–30 phút. Sau khi xong: đăng nhập bằng Gmail + mật khẩu + mã OTP, đăng nhập Google,
tài liệu / bài học / truyện / học viên lưu chung, phân quyền Quản trị viên – Giáo viên – Học viên.

---

## Bước 1. Tạo project Supabase
1. Vào https://supabase.com → **Start your project** → đăng nhập (có thể dùng GitHub).
2. **New project** → đặt tên `shuru` → đặt mật khẩu database (lưu lại, không cần gửi ai) → Region: **Southeast Asia (Singapore)** → **Create**.
3. Đợi 1–2 phút cho project chạy xong.

## Bước 2. Chạy file SQL
1. Menu trái → **SQL Editor** → **New query**.
2. Mở file `supabase-setup.sql`, copy toàn bộ, dán vào → bấm **Run**. Thấy "Success" là xong.

## Bước 3. Điền thông tin vào index.html
1. Supabase: bấm **Connect** (hoặc **Project Settings → Data API**) → copy **Project URL**.
   **Project Settings → API Keys** → copy khóa **anon public** (hoặc **Publishable key**). KHÔNG copy service_role / Secret key.
2. GitHub: mở repo → bấm file `index.html` → bấm biểu tượng **cây bút ✏️** (Edit).
3. Bấm **Ctrl + F**, gõ `SUPABASE_URL = ""` để tìm tới 2 dòng:
   ```js
   let SUPABASE_URL = "";
   let SUPABASE_ANON_KEY = "";
   ```
4. Đặt con trỏ vào **giữa 2 dấu ngoặc kép** rồi dán, thành ví dụ:
   ```js
   let SUPABASE_URL = "https://abcdxyz.supabase.co";
   let SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6...";
   ```
   Giữ nguyên dấu `"` và dấu `;` ở cuối, không thêm dấu cách.
5. Bấm **Commit changes…** → **Commit changes**. Chờ 1–2 phút rồi tải lại web.

> Cách khác (không ghi khóa vào code): để trống 2 dòng trên, triển khai bằng Vercel và đặt biến `SUPABASE_URL`, `SUPABASE_ANON_KEY` trong **Environment Variables**.

## Bước 4. Bật đăng ký bằng Gmail + mã OTP
1. **Authentication → Sign In / Providers → Email**: bật **Enable Email provider** và **Confirm email**.
2. **Authentication → Emails (Templates)**:
   - **Confirm signup**: Subject `Mã OTP xác thực tạo tài khoản - 舒如天上星`, Body: dán nội dung file `email-otp-dang-ky.html`.
   - **Reset password**: Subject `Mã OTP đặt lại mật khẩu - 舒如天上星`, Body: dán file `email-otp-quen-mat-khau.html`.
   (Hai mẫu này dùng `{{ .Token }}` để hiện mã 6 số thay vì đường link.)
3. **Authentication → URL Configuration**:
   - **Site URL**: link web của bạn, ví dụ `https://ten-web.vercel.app` (link Vercel ở Bước 3)
   - **Redirect URLs**: thêm đúng link đó.

> Gói miễn phí của Supabase chỉ gửi được rất ít email mỗi giờ. Khi nhiều học viên đăng ký, vào
> **Authentication → Emails → SMTP Settings** để nối dịch vụ gửi mail như **Resend** (có gói miễn phí).

## Bước 5. (Tùy chọn) Đăng nhập bằng Google
1. Vào https://console.cloud.google.com → tạo project → **APIs & Services → OAuth consent screen** → External → điền tên `舒如天上星`, email.
2. **Credentials → Create credentials → OAuth client ID** → loại **Web application**.
   - **Authorized redirect URIs**: dán URL Supabase cho bạn ở **Authentication → Providers → Google** (dạng `https://xxxx.supabase.co/auth/v1/callback`).
3. Copy **Client ID** và **Client Secret** → dán vào Supabase **Authentication → Providers → Google** → bật → **Save**.

## Bước 6. Đặt bạn làm Quản trị viên
1. Mở web → **Tạo tài khoản** bằng Gmail của bạn → nhập mã OTP.
2. Quay lại Supabase **SQL Editor**, chạy (đổi email):
   ```sql
   select public.set_role('email-cua-ban@gmail.com', 'admin');
   ```
3. Tải lại web → ở thanh bên trái có nút **🛠 Khu quản trị**.

Từ đây bạn phân quyền cho giáo viên ngay trong web (Khu quản trị → 👥 Phân quyền),
hoặc bằng SQL: `select public.set_role('email-giao-vien@gmail.com', 'teacher');`

---

## Loại file tải lên được (bản Supabase)
PDF, ảnh, video MP4/WebM, **Word, PowerPoint, Excel, MP3**, TXT… tối đa **50 MB/file** (gói miễn phí: tổng 1 GB).

## Gặp lỗi?
- Không nhận được email OTP → xem mục Spam; kiểm tra Bước 4; gói miễn phí giới hạn số email/giờ.
- Đăng nhập Google báo lỗi redirect → kiểm tra Site URL / Redirect URLs (Bước 4.3) và redirect URI (Bước 5.2).
- Vào được web nhưng không thấy Khu quản trị → chạy lại lệnh ở Bước 6 đúng email đã đăng ký.
