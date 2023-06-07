import { NavLink } from 'react-router-dom';
import { Box } from '../common/Box';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Box as="nav" mb={3}>
      <Box as="ul" display="flex" pl={15}>
        <NavItem>
          <NavLink to="/">Shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cart">Shopping Cart</NavLink>
        </NavItem>
      </Box>
    </Box>
  );
};
