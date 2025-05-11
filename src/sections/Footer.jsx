import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="white-text-50 md:xl">
            Special Thanks to{" "}
            <a
              href="https://www.youtube.com/watch?v=E-fdPfRxkzQ"
              target="_blank"
              className="bounce-glow"
            >
              JavaScript Mastery
            </a>{" "}
            for the help on this.
          </p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.link} target="_blank" className="bounce-glow">
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Achraf Cheniti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
