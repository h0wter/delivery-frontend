import { useState, useEffect } from 'react';
import { Box } from '../../components/common/Box';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/common/Button/Button';
import { ShopsList } from '../../components/ShopList/ShopsList';
import { ShopMenu } from '../../components/ShopMenu/ShopMenu';
import { StyledModal } from './Shops.styled';

const Shops = ({
  shopsList,
  addToCart,
  isCartEmpty,
  selectedShopId,
  handleShopSwitch,
}) => {
  const [newSelectedShopId, setNewSelectedShopId] = useState(null);
  const [selectedShopMenu, setSelectedShopMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const result = shopsList.filter(shop => shop._id === selectedShopId);
    setSelectedShopMenu(result[0]);
  }, [shopsList, selectedShopId]);

  const handleShopSelect = id => {
    if (isCartEmpty) {
      handleShopSwitch(id);
    } else {
      setIsModalOpen(true);
      setNewSelectedShopId(id);
    }
  };

  return (
    <>
      <Box display="grid" gridGap={4} gridTemplateColumns="3fr 7fr" flex={1}>
        <Box px={4} py={3} borderRadius={10} border="1px solid grey">
          <Box as="p" mb={3} textAlign="center">
            Shops:
          </Box>
          {shopsList.length > 0 && (
            <ShopsList
              shops={shopsList}
              selectedShop={selectedShopId}
              handleShopSelect={handleShopSelect}
            />
          )}
        </Box>
        <Box px={4} py={3} borderRadius={10} border="1px solid grey">
          {selectedShopMenu && (
            <ShopMenu
              menu={selectedShopMenu}
              addToCart={item => {
                addToCart(selectedShopId, item);
              }}
            />
          )}
        </Box>
      </Box>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <StyledModal>
            <h3>Change Store Confirmation</h3>
            <p>
              Changing the store will clear your cart. You can only order from
              one store at a time.
            </p>
            <Box display="flex" justifyContent="center" gridGap={3}>
              <Button
                onClick={() => {
                  handleShopSwitch(newSelectedShopId);
                  setIsModalOpen(false);
                }}
              >
                Confirm
              </Button>
              <Button
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Cancel
              </Button>
            </Box>
          </StyledModal>
        </Modal>
      )}
    </>
  );
};

export default Shops;
