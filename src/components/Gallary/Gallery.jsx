import { Component } from 'react';
import style from './Gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Button from 'components/Button';
import { getImages } from '../Servises/PictureAPI';

class Gallery extends Component {
  state = {
    images: [],
    showModal: false,
    error: null,
    page: 1,
    lageImage: '',
    status: 'idle',
  };
  // componentDidUpdate(prevProps, prevState) {
  //   const prevImageName = prevProps.imageName;
  //   const nextImageName = this.props.imageName;
  //   const page = this.state.page;

  //   if (prevImageName !== nextImageName) {
  //     this.setState({ status: 'pending', page: 1 });
  //     try {
  //       getImages(nextImageName, page)
  //         .then(images => images.hits)
  //         .then(images => this.setState({ images, status: 'resolved' }));
  //     } catch (error) {
  //       console.log(error);
  //       this.setState({ error, status: 'rejected' });
  //     }
  //   }

  //   if (this.state.page !== prevState.page) {
  //     try {
  //       getImages(nextImageName, page)
  //         .then(res => res.hits)
  //         .then(images =>
  //           this.setState({
  //             images: [...prevState.images, ...images],
  //             status: 'resolved',
  //           })
  //         );
  //     } catch (error) {
  //       console.log(error);
  //       this.setState({ error, status: 'rejected' });
  //     }
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;

    if (prevImageName !== nextImageName || this.state.page !== prevState.page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { page } = this.state;
    const { imageName } = this.props;

    try {
      const data = await getImages(imageName, page).then(data => data.hits);
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ error, status: 'rejected' });
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
