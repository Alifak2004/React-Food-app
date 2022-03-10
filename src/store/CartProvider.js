import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			const existingCartItem = state.items[existingItemIndex];
			let updatedItem;
			let updatedItems;
			if (existingCartItem) {
				updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.payload.amount,
				};
				updatedItems = [...state.items];
				const upd = state.items;
				updatedItems[existingItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.payload);
			}

			let updatedtotalAmount =
				state.totalAmount + action.payload.price * action.payload.amount;

			return {
				items: updatedItems,
				totalAmount: updatedtotalAmount,
			};
		}
		case 'REMOVE_ITEM': {
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.payload
			);
			const existingCartItem = state.items[existingCartItemIndex];

			const updatedtotalAmount = state.totalAmount - existingCartItem.price;

			let updatedItems;
			if (existingCartItem.amount === 1) {
				updatedItems = state.items.filter((item) => item.id !== action.payload);
			} else {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount - 1,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			}
			return {
				items: updatedItems,
				totalAmount: updatedtotalAmount,
			};
		}
		default: {
			return state;
		}
	}
};
const CartProvider = (props) => {
	// CREATE A REDUCER

	const [cartState, cartState_dispatch] = useReducer(
		cartReducer,
		initCartState
	);

	const addItemToCartHandler = (item) => {
		cartState_dispatch({ type: 'ADD_ITEM', payload: item });
	};

	const removeItemFromCartHandler = (id) => {
		cartState_dispatch({ type: 'REMOVE_ITEM', payload: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
