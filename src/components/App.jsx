import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer position="top-left" autoClose={2000} />
        <SearchBar onSubmit={this.hendleFormSearchSubmit} />
        <Gallary imageName={imageName} />
      </>
    );
  }
}
export default App;
