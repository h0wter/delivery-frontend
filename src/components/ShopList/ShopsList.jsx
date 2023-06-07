import { ShopListItem } from './ShopsList.styled';

export const ShopsList = ({ shops, handleShopSelect, selectedShop }) => {
  return (
    <ul>
      {shops.map(shop => (
        <ShopListItem
          key={shop._id}
          data-is-active={selectedShop === shop._id}
          onClick={() => handleShopSelect(shop._id)}
        >
          <p>{shop.name}</p>
        </ShopListItem>
      ))}
    </ul>
  );
};
