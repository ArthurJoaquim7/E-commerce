import { useState } from 'react';
import { Content } from './components/Content/Content';
import { Cart } from './components/Cart/Cart';
import { View } from './components/View/View';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [toVideo, setToVideo] = useState([]);
  const [alert, setAlert] = useState(false);
  const [cartShow, setCartShow] = useState(false);


  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    }
    setCart([...cart, item]);
  }
  // ============== TESTING THE toVideo ===============
  const handleVideo = (item) => {
    let isPreen = false;
    toVideo.forEach((product) => {
      if (product.id === item.id)
        isPreen = true;
    })
    setToVideo([item]);
  }

  // ================= SHOW AND UNSHOW THE CART

  const handleCart = () => {
    setCartShow(!cartShow);
  }

  return (
    <><div className="App">
      <Router >
        <NavBar size={cart.length} handleCart={handleCart} />
        <Routes>
          <Route path="/" element={<Content handleClick={handleClick} handleVideo={handleVideo} />}></Route>
          <Route path="/view" element={<View toVideo={toVideo} handleClick={handleClick} />}></Route>
        </Routes>
      </Router>
      {
        cartShow && <Cart cart={cart} setCart={setCart} setCartShow={setCartShow} cartShow={cartShow} handleCart={handleCart} />
      }
      {
        alert && <div className='alert'>
          <p className='info'>O produto já foi adicionado!</p>
        </div>
      }
    </div>

    </>
  )
}

export default App