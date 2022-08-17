import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={style.ImageGalleryItem} id={image.id} onClick={onClick}>
      <img
        src={image.webformatURL}
        alt={image.tag}
        className={style.ImageGalleryItem__image}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    webkitURL: PropTypes.string,
    tag: PropTypes.string,
  }),
  onclick: PropTypes.func,
};
