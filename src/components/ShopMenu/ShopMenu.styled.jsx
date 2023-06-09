import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const MenuItem = styled.li`
  max-width: 370px;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const MenuImg = styled.img`
  height: 250px;
  width: 375px;
  margin-bottom: 16px;

  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const MenuLabel = styled.span`
  margin-bottom: 8px;
`;

export const MenuPrice = styled.span``;
