import toast from 'react-hot-toast';
import { Box } from '../common/Box';
import { Button } from '../common/Button/Button';
import { MenuItem, MenuImg, MenuLabel, MenuPrice } from './ShopMenu.styled';

export const ShopMenu = ({ menu, addToCart }) => {
  const handleAddButtonClick = item => {
    addToCart(item);
    toast.success(`${item.name} successfully added to cart!`);
  };

  return (
    <Box as="ul" display="grid" gridGap={4} gridTemplateColumns="1fr 1fr">
      {menu.products.map(item => (
        <MenuItem key={item._id}>
          <MenuImg src={item.pictureUrl} alt={item.name} />
          <Box display="flex" justifyContent="space-between">
            <MenuLabel>{item.name}</MenuLabel>
            <MenuPrice>{item.price}$</MenuPrice>
          </Box>
          <Box textAlign="center">
            <Button onClick={() => handleAddButtonClick(item)}>
              Add to cart
            </Button>
          </Box>
        </MenuItem>
      ))}
    </Box>
  );
};
