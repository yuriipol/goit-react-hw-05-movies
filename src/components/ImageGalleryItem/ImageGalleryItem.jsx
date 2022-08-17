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
