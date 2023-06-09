import { Box } from '../common/Box';
import { Button } from '../common/Button/Button';
import { CartImg, StyledInput, StyledItem } from './CartList.styled';

export const CartList = ({
  cart,
  handleQuantityChange,
  handleRemoveButtonClick,
}) => {
  return (
    <>
      <ul>
        {cart.map(({ _id, name, pictureUrl, price, quantity }) => (
          <StyledItem key={_id}>
            <CartImg src={pictureUrl} alt={name} />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              maxWidth="220px"
              textAlign="center"
            >
              <p>{name}</p>
              <Box
                mt={3}
                mb={3}
                display="grid"
                gridGap={2}
                gridTemplateColumns="1fr 1fr"
                alignItems="baseline"
              >
                <p>Price: {price}$</p>
                <StyledInput
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={e =>
                    handleQuantityChange(_id, parseInt(e.target.value))
                  }
                />
              </Box>
              <Button onClick={() => handleRemoveButtonClick(_id)}>
                Remove
              </Button>
            </Box>
          </StyledItem>
        ))}
      </ul>
    </>
  );
};
