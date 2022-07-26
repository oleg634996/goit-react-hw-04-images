import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Modal({ onClose, onOpenImg }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

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
