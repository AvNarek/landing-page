const Modal = ({ show, onClick }) => (
  <div
    onClick={() => {
      show = false;
      onClick();
    }}
    className={`modal ${show && 'modal-active'}`}
  />
);

export default Modal;
