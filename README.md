# 舒如天上星

Web học ngoại ngữ: Tiếng Trung, Nhật, Anh, Đức, Tây Ban Nha, Nga, Pháp, Hàn.

## Phân quyền (một web chung)
| Vai trò | Được làm |
|---|---|
| 🛠 Quản trị viên | Toàn quyền: học viên, phân loại lớp, tài liệu, bài học, truyện, thông tin giới thiệu, phân quyền |
| 🧑‍🏫 Giáo viên | Tải tài liệu & đề thi, soạn bài học, soạn truyện |
| 🎓 Học viên | Đăng ký tài khoản rồi vào học: bài học, video shadowing, truyện, tập viết, sổ từ, tài liệu |

## Các file
| File | Dùng để |
|---|---|
| `index.html` | Toàn bộ web |
| `make-config.js`, `vercel.json` | (Tùy chọn) Vercel tạo `config.js` từ biến môi trường |
| `.gitignore` | Chặn `config.js` bị đưa lên GitHub |
| `supabase-setup.sql` | Tạo cơ sở dữ liệu + quy tắc bảo mật trên Supabase |
| `email-otp-dang-ky.html`, `email-otp-quen-mat-khau.html` | Mẫu email mã OTP |
| `HUONG-DAN-SUPABASE.md` | Hướng dẫn từng bước |

## Bắt đầu
Làm theo `HUONG-DAN-SUPABASE.md`. Điền Project URL và khóa anon vào 2 dòng `SUPABASE_URL`, `SUPABASE_ANON_KEY` trong `index.html` (hoặc đặt trong Environment Variables của Vercel).
Chưa điền thì web vẫn mở được nhưng chưa đăng nhập / lưu chung được.
