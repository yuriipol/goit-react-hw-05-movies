import React from 'react';
import { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
  };
  componentDidMount() {
    console.log('Modal componentDidMount');
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open modal WINDOW
        </button>

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
