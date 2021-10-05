import React, { Fragment, useState } from 'react'

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsShown, setIsCartIsShown] = useState(false);

  const showCartHandler = () => {
    setIsCartIsShown(true);
  }

  const hideCartHandler = () => {
    setIsCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
