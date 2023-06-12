import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
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

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 220px;
  text-align: center;
`;

export const ItemPriceWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  margin: 16px 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
`;
