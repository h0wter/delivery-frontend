import { useState, useEffect } from 'react';
import { getShopsList } from '../../services/api';
import { Box } from '../../components/common/Box';
import { ShopsList } from '../../components/ShopList/ShopsList';
import { ShopMenu } from '../../components/ShopMenu/ShopMenu';

const Home = () => {
  const [shopsList, setShopsList] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState(null);
  const [selectedShopMenu, setSelectedShopMenu] = useState(null);

  useEffect(() => {
    getShopsList().then(result => setShopsList([...result]));
  }, []);

  useEffect(() => {
    const result = shopsList.filter(shop => shop._id === selectedShopId);
    setSelectedShopMenu(result[0]);
  }, [shopsList, selectedShopId]);

  const handleShopSelect = id => {
    setSelectedShopId(id);
  };

  return (
    <Box display="grid" gridGap={4} gridTemplateColumns="3fr 7fr" flex={1}>
      <Box px={4} py={3} borderRadius={10} border="1px solid grey">
        <p>Shops: </p>
        {shopsList.length > 0 && (
          <ShopsList
            shops={shopsList}
            selectedShop={selectedShopId}
            handleShopSelect={handleShopSelect}
          />
        )}
      </Box>
      <Box px={4} py={3} borderRadius={10} border="1px solid grey">
        {selectedShopMenu && <ShopMenu menu={selectedShopMenu} />}
      </Box>
    </Box>
  );
};

export default Home;
