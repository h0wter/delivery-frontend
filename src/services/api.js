const { VITE_API_URL, VITE_GOOGLE_API_KEY } = import.meta.env;
import axios from 'axios';

axios.defaults.baseURL = VITE_API_URL;

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

export const getHistory = async ({ email, phone }) => {
  const response = await axios.get(`/history?email=${email}&phone=${phone}`);
  return response;
};

export const getAddressFromCoordinates = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${VITE_GOOGLE_API_KEY}&language=en`
    );

    if (response.data.results.length > 0) {
      const address = response.data.results[0].formatted_address;
      return address;
    } else {
      console.log('No results found');
    }
  } catch (error) {
    console.log('Error retrieving address:', error);
  }
};
