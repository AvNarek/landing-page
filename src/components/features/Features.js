import person2 from '../../assets/images/person2.jpg';

import './Features.css';

function Features() {
  return (
    <div className="features" id="features">
      <div className="features__left">
        <img src={person2} alt="person2" />
      </div>
      <div className="features__right">
        <h2 className="features__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="features__text">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="features__list">
          <li className="features__list-item">Powerfull online protection.</li>
          <li className="features__list-item">Internet without borders.</li>
          <li className="features__list-item">Supercharged VPN</li>
          <li className="features__list-item">No specific time limits.</li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
