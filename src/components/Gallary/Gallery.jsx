import { Component } from 'react';
import style from './Gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class Gallery extends Component {
  state = {
    images: null,
    showModal: false,
    error: null,
    page: 1,
    lageImage: '',
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevSate) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;
    const nextPage = this.state;
    if (prevImageName !== nextImageName) {
      // console.log('Change name of image');
      // console.log('prevProps.imageName:', prevProps.imageName);
      // console.log('this.props.imageName:', this.props.imageName);
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextImageName}&page=${nextPage}&key=28704942-6968b84373f0d7bd37bb26e4e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No pictures`));
        })
        .then(data => data.hits)
        .then(images => this.setState({ images, status: 'resolved' }))
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
  onClickLoadMore = prevState => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
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
      return <h1>Enter name of imeges please</h1>;
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
          {
            <button
              className={style.loadMore}
              type="button"
              onClick={this.onClickLoadMore}
            >
              Load more
            </button>
          }
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={lageImage} alt="lageImage" width={1100} />
              <button type="button" onClick={this.toggleModal}>
                Close
              </button>
            </Modal>
          )}
        </>
      );
    }
  }
}

export default Gallery;
