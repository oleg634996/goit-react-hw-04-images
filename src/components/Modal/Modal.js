import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Modal({ onClose, onOpenImg }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  useEffect(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  return (
    <div
      className="overlay"
      onClick={event => {
        if (event.target.className) {
          onClose();
        }
      }}
    >
      <div className="modal">
        <img src={onOpenImg} alt="" />
      </div>
    </div>
  );
}
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpenImg: PropTypes.string.isRequired,
};
