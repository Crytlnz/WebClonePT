import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSignOutAlt,
  FaBars, // Ikon menu burger untuk mobile
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sembunyikan Navbar pada halaman login dan register
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  // Fungsi untuk handle logout
  const handleLogout = () => {
    // Menghapus data dari localStorage (misalnya token)
    localStorage.removeItem("userToken"); // Ganti "userToken" sesuai dengan token atau data autentikasi yang Anda gunakan
    
    // Navigasi ke halaman login setelah logout
    navigate("/login");
  };

  return (
    <header className="bg-[#38308F]">
      <nav className="px-6 py-4 flex justify-between items-center">
        <img
          src="https://www.lskk.co.id/wp-content/uploads/2024/06/xArtboard-5,40300x-e1718107755849.png.pagespeed.ic.lKGKoFNuPL.webp"
          alt="LSKK"
          width="143"
          height="10"
          className="cursor-pointer"
        />

        {/* Menu Utama */}
        <div className="hidden lg:flex gap-5">
          <Link to="/" className="font-semibold text-white hover:text-gray-300">
            HOME
          </Link>
          <Link to="/about" className="font-semibold text-white hover:text-gray-300">
            ABOUT
          </Link>
          <Link to="/contact" className="font-semibold text-white hover:text-gray-300">
            CONTACT
          </Link>
          <Link to="/project" className="font-semibold text-white hover:text-gray-300">
            PROJECT
          </Link>
        </div>

        {/* Ikon Sosial & Logout untuk Desktop */}
        <div className="hidden lg:flex gap-4 items-center">
          <a
            href="https://web.facebook.com/lskkgroup?_rdc=1&_rdr"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/ptlskk/"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://www.instagram.com/lskk_id/"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.youtube.com/@ptlskkofficial"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube size={18} />
          </a>
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-500 cursor-pointer"
          >
            <FaSignOutAlt size={20} title="Logout" />
          </button>
        </div>

        {/* Menu Burger untuk Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Menu Dropdown untuk Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#38308F] py-4 px-6 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-gray-300 font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gray-300 font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-gray-300 font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            to="/project"
            className="block text-white hover:text-gray-300 font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            PROJECT
          </Link>
          <div className="flex gap-4 mt-4">
            <a
              href="https://web.facebook.com/lskkgroup?_rdc=1&_rdr"
              className="text-white hover:text-gray-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/ptlskk/"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.instagram.com/lskk_id/"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@ptlskkofficial"
              className="text-white hover:text-gray-300"
            >
              <FaYoutube size={18} />
            </a>
            <button
              onClick={handleLogout}
              className="text-white hover:text-red-500 cursor-pointer"
            >
              <FaSignOutAlt size={20} title="Logout" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
