import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={style.ImageGalleryItem} id={image.id} onClick={onClick}>
      <img
        src={image.poster_path}
        alt={image.title}
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
