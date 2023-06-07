import { Box } from '../common/Box';
import { Button } from '../common/Button/Button';
import { MenuItem, MenuImg, MenuLabel, MenuPrice } from './ShopMenu.styled';

export const ShopMenu = ({ menu }) => {
  console.log(menu);
  return (
    <Box as="ul" display="grid" gridGap={4} gridTemplateColumns="1fr 1fr">
      {menu.products.map(({ _id, name, price, pictureUrl }) => (
        <MenuItem key={_id}>
          <MenuImg src={pictureUrl} alt={name} />
          <Box display="flex" justifyContent="space-between">
            <MenuLabel>{name}</MenuLabel>
            <MenuPrice>{price}$</MenuPrice>
          </Box>
          <Button>Add to cart</Button>
        </MenuItem>
      ))}
    </Box>
  );
};
