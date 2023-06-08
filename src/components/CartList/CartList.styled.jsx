import styled from 'styled-components';

export const StyledList = styled.li`
  display: flex;
  padding: 16px 32px;
  border-radius: 10px;
  border: 1px solid grey;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const CartImg = styled.img`
  height: 250px;
  width: 375px;
  margin-right: 16px;
  object-fit: fill;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
`;
