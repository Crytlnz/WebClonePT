import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import EmojiText2 from "./EmojiText2";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // Sembunyikan Footer pada halaman login dan register
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <div className="p-16 h-1/2 w-full text-white flex flex-col gap-4">
      <div className="grid grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <EmojiText2 text="Hubungi Kami" />
            <p>📧 pt.lskk@gmail.com</p>
            <p>💬 +6281214558336</p>
          </div>
          <div className="space-y-4">
            <EmojiText2 text="Follow Us" />
            <div className="flex gap-4">
              <a href="https://www.facebook.com/lskkgroup" target="_blank" rel="noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/lskk_id/" target="_blank" rel="noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@ptlskkofficial" target="_blank" rel="noreferrer">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <EmojiText2 text="Alamat" />
          <p>🌍 Jln. Pelajar Pejuang 45, No 56, Lingkar Selatan, Bandung</p>
          <p>🕒 Senin → Jum'at 09.00 WIB s/d 16.00 WIB</p>
        </div>
      </div>
      <span className="w-full h-[1px] bg-white block"></span>
      <p className="text-center">Copyright © 2024 PT LSKK. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
