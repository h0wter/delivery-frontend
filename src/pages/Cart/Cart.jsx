import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import toast from 'react-hot-toast';
import { addOrder } from '../../services/api';
import { Box } from '../../components/common/Box';
import { CartList } from '../../components/CartList/CartList';
import { Map } from '../../components/common/Map/Map';
import { Form } from '../../components/Form/Form';
import { Button } from '../../components/common/Button/Button';
import {
  CartItemContainer,
  Container,
  OrderFormContainer,
  OrderSubmitWrapper,
} from './Cart.styled';

const initialValue = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const apiKey = 'AIzaSyBAVLyWL1X9FGgGURjhvdBVxtBHtiJPD1Q';

const Cart = ({ cart, activeShopAddress, onOrderSubmit, ...props }) => {
  const [formData, setFormData] = useState(initialValue);
  const [userAddress, setUserAddress] = useState(null);
  const [duration, setDuration] = useState(null);
  const { products, shopId } = cart;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (products.length === 0) {
      toast.error('You must add at least one item to cart.');
      return;
    }

    for (const key in formData) {
      if (formData[key] === '') {
        toast.error('Please complete all fields.');
        return;
      }
    }

    const promise = toast.promise(
      addOrder({
        ...formData,
        shopId,
        totalPrice,
        products: [...products],
      }),
      {
        loading: 'Sending order...',
        success: `${formData.name}, thanks for your order!`,
        error: 'Failed to send order😢 Please try again.',
      }
    );
    try {
      await promise;
      setFormData(initialValue);
      onOrderSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressPick = address => {
    setFormData({ ...formData, address });
  };

  const totalPrice = Number(
    products
      .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
      .toFixed(2)
  );

  return (
    <>
      <Container>
        <OrderFormContainer>
          {isLoaded && activeShopAddress && (
            <Box display="flex" justifyContent="center" mb={2}>
              <Map
                address={activeShopAddress}
                userAddress={userAddress}
                setDuration={setDuration}
                handleAddressPick={handleAddressPick}
              />
            </Box>
          )}
          {duration && (
            <Box as="p" mb={2} textAlign="center">
              Estimated delivery time: {duration}.
            </Box>
          )}
          <Form formData={formData} handleChange={handleChange} />
          <Button
            type="button"
            onClick={() => setUserAddress(formData.address)}
          >
            Plan a route
          </Button>
        </OrderFormContainer>
        <CartItemContainer>
          {products.length > 0 && <CartList cart={products} {...props} />}
        </CartItemContainer>
      </Container>
      <OrderSubmitWrapper>
        <p>Total price: {totalPrice}$</p>
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </OrderSubmitWrapper>
    </>
  );
};

export default Cart;
