import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  width: 500px;
  height: 300px;
  background-color: #e1e1e1;
  border-radius: 15px;
  overflow: hidden;
`;
