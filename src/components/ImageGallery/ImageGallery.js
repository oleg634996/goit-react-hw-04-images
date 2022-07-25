import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ onRenderImg, onClick }) {
  return (
    <ul className="gallery">
      {onRenderImg.map(image => {
        const { id } = image;
        return <ImageGalleryItem onImage={image} key={id} onClick={onClick} />;
      })}
    </ul>
  );
}
export default ImageGallery;

ImageGallery.propTypes = {
  onRenderImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,

  onClick: PropTypes.func.isRequired,
};
