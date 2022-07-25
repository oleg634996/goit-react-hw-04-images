import PropTypes from 'prop-types';

function Button({ onButton }) {
  return (
    <button type="button" className="button-more" onClick={onButton}>
      Load more
    </button>
  );
}
export default Button;
Button.propTypes = {
  onButton: PropTypes.func.isRequired,
};
