import { useState, useEffect, useRef } from 'react';
import style from './Gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Button from 'components/Button';
import { getImages } from '../Servises/PictureAPI';

function Gallery({ imageName }) {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [lageImage, setLageImage] = useState('');
  const [status, setStatus] = useState('idle');

  const imageNameRef = useRef(imageName);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const currentPage = imageName !== imageNameRef.current ? 1 : page;
        const data = await getImages(imageName, currentPage).then(
          data => data.hits
        );
        if (imageName !== imageNameRef.current) {
          setPage(1);
          imageNameRef.current = imageName;
        }
        setImages(prevImages => [...prevImages, ...data]);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    if (imageName) {
      fetchImages();
    }
    /* eslint-disable-next-line */
  }, [imageName, page]);

  const onClickImage = event => {
    const findImage = images.find(
      image => image.id.toString() === event.currentTarget.id
    );
    setLageImage(findImage.largeImageURL);
    toggleModal();
  };
  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // const { images, error, status, showModal, lageImage } = this.state;
  if (status === 'idle') {
    return <h1 className={style.title}>Enter name of images please</h1>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <h2>{error}</h2>;
  }
  if (status === 'resolved') {
    return (
      <>
        <ul className={style.gallery}>
          {images?.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onClick={onClickImage}
            />
          ))}
        </ul>
        {<Button onClick={onClickLoadMore} />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={lageImage} alt="lageImage" width={1100} />
            <button
              type="button"
              className={style.buttonCloseModal}
              onClick={toggleModal}
            >
              close
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default Gallery;

Gallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};
