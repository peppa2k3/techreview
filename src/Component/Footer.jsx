import { Container, Typography, Box, IconButton } from "@mui/material";
import { YouTube, Facebook, Twitter } from "@mui/icons-material";

// Footer Component
function Footer({ owr }) {
  const infomation = {
    mail: "null@gmail.com",
    hotline: "xxxx xxxx",
  };
  const socialLinks = [
    {
      name: "YouTube",
      icon: "▶",
      url: "#",
      gradient: "from-red-600 to-red-700",
    },
    {
      name: "Facebook",
      icon: "f",
      url: "#",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      name: "Twitter",
      icon: "𝕏",
      url: "#",
      gradient: "from-sky-500 to-sky-600",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-blue-500/20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
              {owr.nameWebsite}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Đánh giá công nghệ chuyên sâu
              <br />
              Chia sẻ đam mê, kết nối cộng đồng
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kết nối với chúng tôi
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`group relative w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50`}
                >
                  <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Thông tin
            </h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p className="hover:text-blue-400 transition-colors cursor-pointer">
                Email: {infomation.mail}
              </p>
              <p className="hover:text-blue-400 transition-colors cursor-pointer">
                Hotline: {infomation.hotline}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2025 {owr.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Chính sách
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Điều khoản
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
