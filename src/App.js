import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const showModalHandler = () => {
    setModalOpen(true);
  }

  const hideModalHandler = () => {
    setModalOpen(false);
  }

  return (
    <CartProvider>
      {isModalOpen && <Cart onClick={hideModalHandler}/>}
      <Header onOpenCart={showModalHandler}/>
      <Menu/>
    </CartProvider>
  );
}

export default App;
