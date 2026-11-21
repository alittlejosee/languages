// Chạy trên Vercel lúc triển khai: tạo config.js từ biến môi trường.
// File config.js KHÔNG được đưa lên GitHub (.gitignore).
const fs = require("fs");
const url = process.env.SUPABASE_URL || "";
const anonKey = process.env.SUPABASE_ANON_KEY || "";
if (!url || !anonKey) console.warn("⚠ Chưa đặt SUPABASE_URL / SUPABASE_ANON_KEY trên Vercel – web sẽ chạy chế độ khách.");
fs.writeFileSync("config.js", "window.SRT_CONFIG=" + JSON.stringify({ url, anonKey }) + ";\n");
console.log("Đã tạo config.js");
