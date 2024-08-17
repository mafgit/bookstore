import { FaFire, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="heading">
        <FaFire /> <h3>Bookstore</h3>
      </div>

      <p>Made by</p>
      <div className="line">
        <div className="left">
          <FaGithub />
          <a>mafgit</a>
        </div>

        <div className="right">
          <FaGithub />
          <a>sarimbinasif</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
