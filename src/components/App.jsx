import React from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar';
import Gallary from './Gallary';

function App() {
  const [imageName, setState] = useState('');

  const hendleFormSearchSubmit = imageName => {
    setState(imageName);
  };

  return (
    <>
      <ToastContainer position="top-left" autoClose={2000} />
      <SearchBar onSubmit={hendleFormSearchSubmit} />
      <Gallary imageName={imageName} />
    </>
  );
}

export default App;
