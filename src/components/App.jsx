import React from 'react';
import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

import SearchBar from './SearchBar';
import Gallary from './Gallary';

class App extends Component {
  state = {
    imageName: '',
  };

  hendleFormSearchSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName } = this.state;
    return (
      <>
        {/* <ToastContainer /> */}
        <SearchBar onSubmit={this.hendleFormSearchSubmit} />
        <button type="button" onClick={this.toggleModal}>
          Open modal WINDOW
        </button>
        <Gallary imageName={imageName} />
      </>
    );
  }
}
export default App;
