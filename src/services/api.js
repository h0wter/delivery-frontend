import axios from 'axios';

axios.defaults.baseURL = 'https://delivery-app-zkhg.onrender.com/api';

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

export const getAddressFromCoordinates = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBAVLyWL1X9FGgGURjhvdBVxtBHtiJPD1Q&language=en`
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
