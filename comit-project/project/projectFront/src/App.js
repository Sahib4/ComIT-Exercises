import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container"> 
        <header className="row">
            <div className="brand">
                <a href="/">Shop</a>
            </div>

            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign-In</a>
            </div>
        </header>

        <main>
          <Route path = "/product/:id" component ={ProductScreen}></Route>
          <Route path="/" component = {HomeScreen} exact></Route>

        </main>

        <footer className="row center"> All rights resvered </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
