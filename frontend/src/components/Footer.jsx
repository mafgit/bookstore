import { FaFire, FaGithub } from "react-icons/fa6";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="heading">
        <FaFire className="fire" /> <h3>Bookstore</h3>
      </div>

      <p>Made by</p>
      <div className="line">
        <div className="left">
          <FaGithub />
          <a href="https://github.com/mafgit" target="_blank">
            mafgit
          </a>
        </div>
        with a little help of
        <div className="right">
          <FaGithub />
          <a href="https://github.com/sarimbinasif" target="_blank">
            sarimbinasif
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
