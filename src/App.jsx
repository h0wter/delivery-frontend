import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './components/common/GlobalStyle';
import { Layout } from './components/common/Layout';

const HomePage = lazy(() => import('./pages/Home/Home'));
const CartPage = lazy(() => import('./pages/Cart/Cart'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" />
      <GlobalStyle />
    </Suspense>
  );
}

export default App;
