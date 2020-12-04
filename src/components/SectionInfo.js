import userLogo from '../assets/icons/user.svg';
import locationLogo from '../assets/icons/location.svg';
import serverLogo from '../assets/icons/server.svg';

import './SectionInfo.css';

const SectionInfo = () => {
  return (
    <div className="info__page">
      <div className="info__item">
        <div className="info__logo">
          <img src={userLogo} alt="user-logo" />
        </div>
        <div className="info__text">
          <strong>90+</strong>
          Users
        </div>
      </div>
      <div className="info__item">
        <div className="info__logo">
          <img src={locationLogo} alt="location-logo" />
        </div>
        <div className="info__text">
          <strong>30+</strong>
          Locations
        </div>
      </div>
      <div className="info__item">
        <div className="info__logo">
          <img src={serverLogo} alt="server-logo" />
        </div>
        <div className="info__text">
          <strong>50+</strong>
          Servers
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
