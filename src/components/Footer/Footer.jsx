import sert1 from "../../assets/images/footerSerts/footer-sert1.jpg";
import sert2 from "../../assets/images/footerSerts/footer-sert2.jpg";
import sert3 from "../../assets/images/footerSerts/footer-sert3.jpg";
import sert4 from "../../assets/images/footerSerts/footer-sert4.jpg";
import sert5 from "../../assets/images/footerSerts/footer-sert5.jpg";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/generalIcons/facebook.svg";
import instagram from "../../assets/images/generalIcons/instagram.svg";
import twitter from "../../assets/images/generalIcons/twitter.svg";
import vk from "../../assets/images/generalIcons/vk.svg";
import whatsapp from "../../assets/images/generalIcons/whatsapp.svg";
import youtube from "../../assets/images/generalIcons/youtube.svg";
import email from "../../assets/images/generalIcons/email.svg";
import phone from "../../assets/images/generalIcons/phone.svg";
import propCompany1 from "../../assets/images/propCompanies/uzassystem.jpg";
import propCompany2 from "../../assets/images/propCompanies/srepae.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__top">
        <div className="footer__contacts">
          <h3 className="footer-h3">Контакты</h3>
          <div className="footer__email">
            <img src={email} alt="" />
            <a href="">info@uzee.uz</a>
          </div> 
          <div className="footer__phone">
            <img src={phone} alt="" /> 
            <div className="footer__phone-numbers">
              <p>(+99855) 520-04-04</p>
              <p>(+99871) 291-87-26</p>
            </div>
          </div>
          <div className="footer__address">
            <p>100076, г. Ташкент ул.М.Ашрафи 1 пер.,дом 9</p>
          </div>
          <img src={logo} alt="" className="footer__contacts-logo" />
          <div className="footer__media">
            <h4>Мы в социальных сетях:</h4>
            <div className="footer__media-images">
              <a href="">
                <img src={facebook} alt="" />
              </a>
              <a href="">
                <img src={instagram} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={vk} alt="" />
              </a>
              <a href="">
                <img src={whatsapp} alt="" />
              </a>
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__map">
          <h3 className="footer-h3">карта сайта</h3>
          <ul className="footer__map-list">
            <li>
              <Link to='/' className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                Об организации
              </Link>
            </li>
            <li>
              <Link to="/activity" className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/exp" className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                Опыт и компетенция
              </Link>
            </li>
            <li>
              <Link to="/adv" className="footer__map-item">
                <svg
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3.84758L-3.67049e-07 7.69516L-2.6353e-08 6.86126e-06L6.75 3.84758Z"
                    fill="#0068b4"
                  />
                </svg>
                Почему выбирают нас?
              </Link>
            </li>
           
          </ul>
        </div>
        <div className="footer__prop-companies">
          <h3 className="footer-h3">Наши дочерные предприятия</h3>
          <ul className="footer__map-list">
            <li>
              <a href='https://uzassystem.uz/ru/' className="footer__map-item">
              <img src={propCompany1} alt="" />
              </a>
            </li>
            <li>
              <a href="https://srepae.com/" className="footer__map-item">
              <img src={propCompany2} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__sert">
          <a href="https://gov.uz/oz"><img src={sert1} alt="" /></a>
          <a href="https://dc.uz/"><img src={sert2} alt="" /></a>
          <a href="https://my.gov.uz/uz"><img src={sert3} alt="" /></a>
          <a href="https://gov.uz/oz/uzkomnazorat"><img src={sert4} alt="" /></a>
          <a href="https://uforum.uz/"><img src={sert5} alt="" /></a>
        </div>
      </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
        <p>Копирование информации (цитирование в средствах массовой информации тех или иных сведений либо сообщений), размещенной на сайте общества (далее Сайт) допускается при условии указания ссылки на источник такой информации.</p>
        <p>Заметили ошибку в тексте? Выделите ее мышкой и нажмите <span>Ctrl + Enter</span></p>
        <p>© 2019-2022, Акционерное общество "O'zenergoinjiniring"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
