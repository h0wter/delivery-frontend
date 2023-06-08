import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
