import React from 'react';
import { Component } from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import Gallary from './Gallary';

class App extends Component {
  state = {
    showModal: false,
    images: null,
    loading: false,
  };
  // #BASE_URL = 'https://pixabay.com/api/';
  // #API_KEY = '28704942-6968b84373f0d7bd37bb26e4e';
  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=28704942-6968b84373f0d7bd37bb26e4e&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(data => data.hits)
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
  }
  componentWillUnmount() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // console.log(this.state.images);
    const { showModal, images, loading } = this.state;
    return (
      <>
        <SearchBar />
        <button type="button" onClick={this.toggleModal}>
          Open modal WINDOW
        </button>
        {loading && <h1>Loading!!!</h1>}
        {images && <Gallary arrayImages={images} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Contetnt from modal window like children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              deleniti saepe eum iste minus dolor molestiae doloremque
              voluptatum exercitationem dolorem beatae explicabo repudiandae
              quod, eligendi quos assumenda reprehenderit quas magnam.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </>
    );
  }
}
export default App;
