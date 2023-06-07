import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #f7f7f8;
  border-radius: 10px;
  border: 1px solid #adadad;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease;

  cursor: pointer;

  &:hover {
    /* background-color: #dfdfdf; */
    background-color: #e4e4e4;

    &:active {
      background-color: #d4d4d4;
    }
  }
`;
