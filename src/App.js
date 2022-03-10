import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import Header from './components/LAYOUT/Header';
import Menu from './components/MENU/Menu';
import Cart from './components/CART/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/LAYOUT/Footer';
const App = () => {
	const [showCart, setShowCart] = useState(false);

	const showCartOnClick = () => {
		setShowCart(true);
	};

	const hideCartOnClick = () => {
		setShowCart(false);
	};

	return (
		<CartProvider>
			<Router>
				<div className='bg-dark text-light'>
					<Header showCartOnClick={showCartOnClick} />
					<Menu />
					{showCart && <Cart hideCartOnClick={hideCartOnClick} />}
					<Footer />
				</div>
			</Router>
		</CartProvider>
	);
};
export default App;
