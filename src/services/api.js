import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

export const getShopsList = async () => {
  try {
    const response = await axios.get('/shops');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = async order => {
  const response = await axios.post('/orders', order);
  return response;
};
