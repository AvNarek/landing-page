import { ReactComponent as ChevronArrow } from '../../../assets/icons/chevron-upwards-arrow.svg';

const ScrollTopButton = ({ show, clicked }) => {
  return (
    <button
      onClick={clicked}
      className={`btn__top ${show ? 'btn__top-show' : 'btn__top-close'}`}
    >
      <ChevronArrow />
    </button>
  );
};

export default ScrollTopButton;
