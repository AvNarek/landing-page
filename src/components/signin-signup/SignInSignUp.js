import './SignInSignUp.css';

import { ReactComponent as UserLogo } from '../../assets/icons/user-signin.svg';
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg';
import { ReactComponent as Padlock } from '../../assets/icons/padlock.svg';
import { ReactComponent as PadlockOpen } from '../../assets/icons/padlock-open.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Google } from '../../assets/icons/google-plus.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrowAnim.svg';

import signupImage from '../../assets/images/signup-image.jpg';
import Input from '../UI/Input/Input';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/appContext';

const SignInSignUp = ({ signup }) => {
  const history = useHistory();
  const { login } = useContext(AppContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    clearInput(e.target);

    const name = e.target['name'];
    const email = e.target['email'];
    const password = e.target['password'];
    const confirmPassword = e.target['re-password'];
    const checkbox = e.target['checkbox'];

    let validate = true;

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (signup && (name.value === '' || name.value.trim() === '')) {
      name.classList.add('input-danger');
      validate = false;
    }
    if (!re.exec(String(email.value))) {
      email.classList.add('input-danger');
      validate = false;
    }
    if (password.value.length < 6) {
      password.classList.add('input-danger');
      validate = false;
    }
    if (signup && password.value !== confirmPassword.value) {
      confirmPassword.classList.add('input-danger');
      validate = false;
    }
    if (signup && !checkbox.checked) {
      checkbox.classList.add('checkbox-danger');
      validate = false;
    }

    if (validate) {
      login();
      history.push('/');
    }
  };

  const clearInput = (items) => {
    for (let item of items) {
      item.classList.contains('input-danger') &&
        item.classList.remove('input-danger');
    }
  };

  return (
    <div className="signup">
      <button className="link link--arrowed" onClick={() => history.push('/')}>
        <Arrow />
        Back To Main
      </button>
      <div className="signup__form">
        <h2 className="signup__title">Sign {signup ? 'up' : 'in'}</h2>
        <form className="register-form" onSubmit={onSubmitHandler}>
          {signup && (
            <div className="form-group">
              <Input placeholder="Your Name" type="text" name="name" />
              <label htmlFor="name" className="control-label">
                <UserLogo />
              </label>
            </div>
          )}
          <div className="form-group">
            <Input placeholder="Your Email" type="email" name="email" />
            <label htmlFor="email" className="control-label">
              <Envelope />
            </label>
          </div>
          <div className="form-group">
            <Input placeholder="Password" type="password" name="password" />
            <label htmlFor="password" className="control-label">
              <Padlock />
            </label>
          </div>
          {signup && (
            <div className="form-group">
              <Input
                placeholder="Repeat your password"
                type="password"
                name="re-password"
              />
              <label className="control-label" htmlFor="re-password">
                <PadlockOpen />
              </label>
            </div>
          )}
          <div className="form-group__check">
            <Input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">
              {signup ? (
                <>
                  I agree all statements in <span>Terms of service</span>
                </>
              ) : (
                'Remember me'
              )}
            </label>
          </div>
          <div className="btn-submit">
            <Input
              className="btn"
              type="submit"
              value={`${signup ? 'Register' : 'Log in'}`}
            />
            <Input
              className="btn btn-outline"
              type="button"
              onClick={() => history.push(`${signup ? '/signin' : 'signup'}`)}
              value={`Switch to Sign ${signup ? 'in' : 'up'}`}
            />
          </div>
        </form>
        {!signup && (
          <div className="social__login">
            <p>Or login with</p>
            <Facebook />
            <Twitter />
            <Google />
          </div>
        )}
      </div>
      <img src={signupImage} alt="signup" />
    </div>
  );
};

export default SignInSignUp;
