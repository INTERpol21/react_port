import "./style.css"
import vk from "./../../img/icons/vk.svg";
import telegram from "./../../img/icons/telegram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vk.com/toxa199821"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/interpol2121"
              >
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/INTERpol21"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 INTERpol</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
