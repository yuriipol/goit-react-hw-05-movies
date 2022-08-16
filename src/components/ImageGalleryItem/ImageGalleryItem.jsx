import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tag}
        className={style.ImageGalleryItem__image}
      />
    </li>
  );
};

export default ImageGalleryItem;
