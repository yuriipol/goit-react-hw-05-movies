import { Component } from 'react';
import style from './Gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Button from 'components/Button';
import fetchImages from '../Servises/PictureAPI';

class Gallery extends Component {
  state = {
    images: null,
    showModal: false,
    error: null,
    page: 1,
    lageImage: '',
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;
    const page = this.state.page;

    if (prevImageName !== nextImageName) {
      // console.log('Change name of image');
      // console.log('prevProps.imageName:', prevProps.imageName);
      // console.log('this.props.imageName:', this.props.imageName);
      this.setState({ status: 'pending', page: 1 });

      fetchImages(nextImageName, page)
        .then(data => data.hits)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    if (this.state.page !== prevState.page) {
      fetchImages(nextImageName, page)
        .then(data => data.hits)
        .then(images =>
          this.setState({
            images: [...prevState.images, ...images],
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  onClickImage = event => {
    const { images } = this.state;
    const findImage = images.find(
      image => image.id.toString() === event.currentTarget.id
    );
    this.setState({
      lageImage: findImage.largeImageURL,
    });
    this.toggleModal();
  };
  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log(this.state.page);
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, status, showModal, lageImage } = this.state;
    if (status === 'idle') {
      return <h1 className={style.title}>Enter name of imeges please</h1>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={style.gallery}>
            {images?.map(image => (
              <ImageGalleryItem
                image={image}
                key={image.id}
                onClick={this.onClickImage}
              />
            ))}
          </ul>
          {<Button onClick={this.onClickLoadMore} />}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={lageImage} alt="lageImage" width={1100} />
              <button
                type="button"
                className={style.buttonCloseModal}
                onClick={this.toggleModal}
              >
                close
              </button>
            </Modal>
          )}
        </>
      );
    }
  }
}

export default Gallery;

Gallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};
