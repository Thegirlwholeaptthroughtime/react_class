import Home from "./components/Home";
import React, { useState } from 'react';
import {RecoilRoot} from 'recoil'


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
     
      <RecoilRoot>
        <Home 
          cartCount = {cartCount}
          setCartCount = {setCartCount}
        />
      </RecoilRoot>
      
  );
}

export default App;
