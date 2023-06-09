import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 32px;
  border-radius: 10px;
  border: 1px solid #808080;
`;

export const SectionContainer = styled.div`
  padding: 32px 16px;
  border-radius: 10px;
  border: 1px solid #808080;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;

  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 10px;
`;

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

export const StyledItem = styled.li`
  display: flex;
  width: 100%;
  padding: 16px 16px;
  border-radius: 10px;
  border: 1px solid grey;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProductItem = styled.li`
  display: flex;
  padding: 16px 16px;
  border-radius: 10px;
  border: 1px solid grey;
  flex: 0 0 calc((100%) / 3 - 16px);
  max-width: 580px;
  min-width: 500px;

  @media (max-width: 1200px) {
    flex: 0 0 calc((100%) / 2 - 16px);
    min-width: 395px;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  width: 160px;
  flex-direction: column;
  justify-content: center;
  max-width: 220px;
  text-align: center;
`;

export const CartImg = styled.img`
  height: auto;
  width: 18vw;
  margin-right: 16px;
  border-radius: 10px;
`;
