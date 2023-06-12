import { Box } from '../common/Box';
import { Button } from '../common/Button/Button';
import {
  CartImg,
  StyledInput,
  StyledItem,
  ItemInfo,
  ItemPriceWrapper,
} from './CartList.styled';

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
            <ItemInfo>
              <p>{name}</p>
              <ItemPriceWrapper>
                <p>Price: {price}$</p>
                <StyledInput
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={e =>
                    handleQuantityChange(_id, parseInt(e.target.value))
                  }
                />
              </ItemPriceWrapper>
              <Button onClick={() => handleRemoveButtonClick(_id)}>
                Remove
              </Button>
            </ItemInfo>
          </StyledItem>
        ))}
      </ul>
    </>
  );
};
