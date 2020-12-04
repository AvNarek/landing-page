import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as AppLogo } from '../../assets/icons/logo.svg';
import AppContext from '../../context/appContext';
import Modal from '../Modal';
import ScrollTopButton from '../UI/Button/ScrollTopButton';

import './Header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hamburger, setHamburger] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);
  const { authenticate, logout } = useContext(AppContext);

  useEffect(() => {
    let lastScrollTop = 0;

    window.onscroll = !toggleMenu
      ? () => {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          st > lastScrollTop ? setHamburger(false) : setHamburger(true);
          window.pageYOffset < 700
            ? setShowTopButton(false)
            : setShowTopButton(true);

          lastScrollTop = st <= 0 ? 0 : st;
        }
      : () => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft;

          window.onscroll = () => {
            !toggleMenu && window.scrollTo(scrollLeft, scrollTop);
          };
        };
  }, [toggleMenu]);

  return (
    <header className="header">
      <Modal show={toggleMenu} onClick={() => setToggleMenu(false)} />
      <ScrollTopButton
        show={showTopButton}
        clicked={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}
      />
      <div className="header__logo">
        <AppLogo />
        Lasles<strong>VPN</strong>
      </div>
      <div
        className={`hamburger ${
          !hamburger ? 'hamburger-close' : 'hamburger-show'
        } ${toggleMenu && 'hamburger-active'}`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <span />
        <span />
        <span />
      </div>
      <nav
        className={`nav ${toggleMenu && 'nav-active'}`}
        onClick={(e) => {
          e.target.nodeName === 'A' && toggleMenu && setToggleMenu(false);
        }}
      >
        <ul className="nav__links">
          <li className="nav__element">
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li className="nav__element">
            <a className="nav__link" href="#features">
              Features
            </a>
          </li>
          <li className="nav__element">
            <a href="#pricing" className="nav__link">
              Pricing
            </a>
          </li>
          <li className="nav__element">
            <a className="nav__link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li className="nav__element">
            <a className="nav__link" href="#help">
              Help
            </a>
          </li>
        </ul>
        <div className="signin-signup">
          {!authenticate ? (
            <>
              <NavLink className="btn__signin" to="/signin">
                Sign In
              </NavLink>

              <NavLink className="btn__outline" to="/signup">
                Sign Up
              </NavLink>
            </>
          ) : (
            <NavLink to="/" className="btn__outline" onClick={logout}>
              Logout
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
