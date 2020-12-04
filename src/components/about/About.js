import Button from '../UI/Button/Button';
import personImg from '../../assets/images/person1.jpg';

import './About.css';

const About = () => {
  return (
    <div className="main" id="about">
      <div className="main__left">
        <h1 className="main__title">
          Want anything to be easy with <strong>LaslesVPN.</strong>
        </h1>
        <p className="main__text">
          Provide a network for all your needs with ease and fun using{' '}
          <strong>LaslesVPN</strong> discover interesting features from us.
        </p>
        <Button name="Get Started" className="btn__get" />
      </div>
      <div className="main__right">
        <img src={personImg} alt="person" />
      </div>
    </div>
  );
};

export default About;
