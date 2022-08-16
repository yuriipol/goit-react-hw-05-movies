import ImageGalleryItem from 'components/ImageGalleryItem';
import style from './Gallery.module.css';

const Gallery = ({ arrayImages }) => {
  return (
    <ul className={style.gallery}>
      {arrayImages?.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};

export default Gallery;
