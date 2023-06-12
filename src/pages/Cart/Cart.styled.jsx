import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 4fr 6fr;
  flex: 1;
`;

export const OrderFormContainer = styled.div`
  padding: 32px 16px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

export const CartItemContainer = styled.div`
  padding: 32px 16px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

export const OrderSubmitWrapper = styled.div`
  display: flex;
  align-items: baseline;
  grid-gap: 16px;
  margin-top: 16px;
  margin-left: auto;
  padding-bottom: 16px;
`;
