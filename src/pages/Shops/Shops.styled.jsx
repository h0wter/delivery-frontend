import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 3fr 7fr;
  flex: 1;
`;

export const ShopsListContainer = styled.div`
  padding: 16px 32px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

export const ShopMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`;
