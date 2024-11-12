import React from "react";
import "../style/footer.css"; // Impor file CSS untuk styling
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mt-10">
        <div className="row">
          <div className="col-md-4">
            <h5>Hubungi Kami</h5>
            <p>
              <a href="mailto:pt.lskk@gmail.com">pt.lskk@gmail.com</a>
              <br />
              +6281214558336
            </p>
          </div>
          <div className="col-md-4">
            <h5>Alamat</h5>
            <p>
              Jl. Pelajar Pejuang 45. No 56, Lingkar Selatan, Bandung
              <br />
              Senin - Jumat 09.00 WIB s/d 16.00 WIB
            </p>
          </div>
          <div className="col-md-2">
            <h5 className="pl-56">Follow</h5>
            <div className="social-icons flex gap-1">
              <a
                href="https://web.facebook.com/lskkgroup?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-blue-700 pl-80"
              >
                <FaSquareFacebook />
              </a>
              <a
                href="https://www.instagram.com/lskk_id/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-purple-600"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.youtube.com/@ptlskkofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-red-600"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>{" "}
        
      </div>
      <div className="footer-content">
        <p>&copy; 2024 PT LSKK. All Rights Reserved.</p>
        <button className="scroll-to-top">
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;