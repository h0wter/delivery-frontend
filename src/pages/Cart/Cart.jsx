import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import toast from 'react-hot-toast';
import { addOrder } from '../../services/api';
import { Box } from '../../components/common/Box';
import { CartList } from '../../components/CartList/CartList';
import { Map } from '../../components/common/Map/Map';
import { Form } from '../../components/Form/Form';
import { Button } from '../../components/common/Button/Button';

const initialValue = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const apiKey = 'AIzaSyBAVLyWL1X9FGgGURjhvdBVxtBHtiJPD1Q';

const Cart = ({ cart, activeShopAddress, onOrderSubmit, ...props }) => {
  const [formData, setFormData] = useState(initialValue);
  const { products, shopId } = cart;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
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

  const totalPrice = Number(
    products
      .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
      .toFixed(2)
  );

  return (
    <>
      <Box display="grid" gridGap={4} gridTemplateColumns="4fr 6fr" flex={1}>
        <Box px={4} py={3} borderRadius={10} border="1px solid grey">
          {isLoaded && <Map address={activeShopAddress} />}
          <Form formData={formData} handleChange={handleChange} />
        </Box>
        <Box px={4} py={3} borderRadius={10} border="1px solid grey">
          {products.length > 0 && <CartList cart={products} {...props} />}
        </Box>
      </Box>
      <Box mt={3} ml="auto" display="flex" alignItems="baseline" gridGap={3}>
        <p>Total price: {totalPrice}$</p>
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Cart;
