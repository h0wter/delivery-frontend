import styled from 'styled-components';

export const ShopListItem = styled.li`
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${props =>
    props['data-is-active'] ? '#d4d4d4' : '#f7f7f8'};

  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover:not([data-is-active='true']) {
    background-color: #e4e4e4;
  }
`;
