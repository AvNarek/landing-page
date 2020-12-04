import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" id="help">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__logo">
            <Logo />
            Lasles<strong>VPN</strong>
          </div>
          <p className="footer__text">
            <strong>LaslesVPN</strong> is a private virtual network that has
            unique features and has high security.
          </p>
          <div className="footer__icons">
            <div className="icon">
              <Facebook />
            </div>
            <div className="icon">
              <Instagram />
            </div>
            <div className="icon">
              <Twitter />
            </div>
          </div>
          <p className="copyright">©2020LaslesVPN</p>
        </div>
        <div className="links__group">
          <div className="links__item">
            <h4>Product</h4>
            <ul className="links">
              <li className="link__item">
                <Link to="/download">Download</Link>
              </li>
              <li className="link__item">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="link__item">
                <Link to="/locations">Locations</Link>
              </li>
              <li className="link__item">
                <Link to="/server">Server</Link>
              </li>
              <li className="link__item">
                <Link to="/countries">Countries</Link>
              </li>
              <li className="link__item">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="links__item">
            <h4>Engage</h4>
            <ul className="links">
              <li className="link__item">
                <Link to="/">LaslesVPN</Link>
              </li>
              <li className="link__item">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="link__item">
                <Link to="/tutorials">Tutorials</Link>
              </li>
              <li className="link__item">
                <Link to="/about-use">About Use</Link>
              </li>
              <li className="link__item">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="link__item">
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="links__item">
            <h4>Earn Money</h4>
            <ul className="links">
              <li className="link__item">
                <Link to="/affiliate">Affiliate</Link>
              </li>
              <li className="link__item">
                <Link to="/partner">Become Partner</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
