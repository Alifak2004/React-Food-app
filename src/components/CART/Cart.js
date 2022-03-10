import Modal from '../UI/Modal';
import style from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const addItemOnclick = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};
	const removeItemOnClick = (id) => {
		cartCtx.removeItem(id);
	};

	let cartItems;
	if (cartCtx.items.length == 0) {
		cartItems = <p className='display-6'>Your Cart is Empty !</p>;
	} else
		cartItems = cartCtx.items.map((item) => {
			return (
				<div key={item.id}>
					<div className={style.eachItem}>
						<div className={style.cartItem}>
							<div className={`h4 mb-1 ${style.title}`}>{item.title}</div>
							<div className={`${style.disc}`}>{item.disc}</div>
							<div className='h5 pt-1'>{item.price}</div>
						</div>
						<div className='align-self-center'>
							<div className='h5 border rounded border-dark text-center p-1 bg-light text-dark opacity-75'>
								x{item.amount}
							</div>
							<div className={style.add_rem}>
								<button
									onClick={addItemOnclick.bind(null, item)}
									className={`${style.btns} ${style.add}`}>
									+
								</button>
								<button
									onClick={removeItemOnClick.bind(null, item.id)}
									className={`${style.btns} ${style.remove}`}>
									-
								</button>
							</div>
						</div>
					</div>
					<div className={style.underline}></div>
				</div>
			);
		});

	return (
		<Modal onClick={props.hideCartOnClick}>
			<div className={cartCtx.items.length <= 1 ? null : style.scroll}>
				<div className={`${style.cartItems}`}>{cartItems}</div>
				<div className={`mt-5 ${style.header}`}></div>
			</div>
			<h5 className='h4'>Total amount : </h5>
			<span className='text-danger h4 fw-bold'>
				$ {cartCtx.totalAmount.toFixed(2)}
			</span>
			<div className={style.buttons}>
				<button className={style.btn} onClick={props.hideCartOnClick}>
					go back
				</button>
				<button className={`${style.btn} ${style.order}`}>Order</button>
			</div>
		</Modal>
	);
};
export default Cart;
