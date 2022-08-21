import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    return window.removeEventListener('keydown', hendleKeyDown);
  });

  const hendleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const hendleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.overlay} onClick={hendleBackDropClick}>
      <div className={style.modal__content}>{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
