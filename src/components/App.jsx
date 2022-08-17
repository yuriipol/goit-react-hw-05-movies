import React from 'react';
import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Modal from './Modal';
import SearchBar from './SearchBar';
import Gallary from './Gallary';

class App extends Component {
  state = {
    showModal: false,
    imageName: '',
  };

  hendleFormSearchSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, imageName } = this.state;
    return (
      <>
        {/* <ToastContainer /> */}
        <SearchBar onSubmit={this.hendleFormSearchSubmit} />
        <button type="button" onClick={this.toggleModal}>
          Open modal WINDOW
        </button>

        <Gallary imageName={imageName} />

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
