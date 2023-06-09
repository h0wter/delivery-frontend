import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './components/common/GlobalStyle';
import { Layout } from './components/common/Layout';
import { getShopsList } from './services/api';

const ShopsPage = lazy(() => import('./pages/Shops/Shops'));
const CartPage = lazy(() => import('./pages/Cart/Cart'));
const MapPage = lazy(() => import('./pages/Map'));

const initialState = {
  shopId: null,
  products: [],
};

function App() {
  const [cart, setCart] = useState(initialState);
  const [shopsList, setShopsList] = useState([]);
  const [selectedShopId, setSelectedShopId] = useState(null);

  const activeShopAddress = useMemo(() => {
    return shopsList.reduce((address, shop) => {
      return shop._id === selectedShopId ? shop.address : address;
    }, null);
  }, [shopsList, selectedShopId]);

  useEffect(() => {
    getShopsList().then(result => setShopsList([...result]));
  }, []);

  useEffect(() => {
    const cart = localStorage.getItem('myCart');
    const parsedCart = JSON.parse(cart);
    if (parsedCart) {
      console.log(parsedCart);
      setSelectedShopId(parsedCart.shopId);
      setCart({ ...parsedCart });
    }
  }, []);

  useEffect(() => {
    if (cart.products.length > 0) {
      localStorage.setItem('myCart', JSON.stringify(cart));
    }
  }, [cart]);

  const handleShopSwitch = id => {
    setSelectedShopId(id);
    if (cart.products.length > 0) {
      setCart(initialState);
      localStorage.setItem('myCart', JSON.stringify(initialState));
    }
  };

  const handleAddToCart = (shopId, item) => {
    const idx = cart.products.findIndex(product => product._id === item._id);
    if (idx === -1) {
      setCart({
        ...cart,
        shopId,
        products: [...cart.products, { ...item, quantity: 1 }],
      });
    } else {
      const updatedCart = cart.products.map(product =>
        product._id === item._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart({ ...cart, shopId, products: [...updatedCart] });
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCart({
      ...cart,
      products: cart.products.map(item =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    });
  };

  const handleRemoveButtonClick = id => {
    const updatedCart = cart.products.filter(item => item._id !== id);
    setCart({ ...cart, products: [...updatedCart] });
  };

  const onOrderSubmit = () => {
    setCart(initialState);
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ShopsPage
                shopsList={shopsList}
                addToCart={handleAddToCart}
                isCartEmpty={cart.products.length === 0}
                selectedShopId={selectedShopId}
                handleShopSwitch={handleShopSwitch}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                activeShopAddress={activeShopAddress}
                onOrderSubmit={onOrderSubmit}
                handleQuantityChange={handleQuantityChange}
                handleRemoveButtonClick={handleRemoveButtonClick}
              />
            }
          />
          <Route path="/map" element={<MapPage />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" />
      <GlobalStyle />
    </Suspense>
  );
}

export default App;
