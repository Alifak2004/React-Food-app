import { useRef, useState, useContext } from 'react';
import style from '../Menu.module.css';
import ItemInput from './ItemInput';
import CartContext from '../../../store/CartContext';
const Item = (props) => {
	const { id, disc, title, price } = props.item;

	const cartCtx = useContext(CartContext);
	// Managing states
	const [amountIsValid, setAmountIsValid] = useState(true);

	if (amountIsValid === true) {
		setTimeout(() => {
			setAmountIsValid(true);
		}, 8000);
	}
	const modPrice = `$${parseFloat(price).toFixed(2)}`;
	const ammountInputRef = useRef();

	// ONSUBMIT
	const onSubmit = (e) => {
		e.preventDefault();
		const enteredAmount = ammountInputRef.current.value;
		const enteredAmountNum = +enteredAmount;
		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNum < 0 ||
			enteredAmountNum > 5
		) {
			setAmountIsValid(false);
			return;
		} else {
			setAmountIsValid(true);
		}
		const newItem = {
			id,
			disc,
			title,
			price: parseFloat(price).toFixed(2),
			amount: enteredAmountNum,
		};
		cartCtx.addItem(newItem);
	};

	return (
		<li className={style.li}>
			<div className={style['title-disc']}>
				<div className={style.title}>{title}</div>
				<span className={style.disc}>{disc}</span>
				<div className={`${style.price}`}>{modPrice}</div>
			</div>
			<form className={style.form} onSubmit={onSubmit}>
				{/* ///// 	INPUT		///// */}
				<ItemInput ref={ammountInputRef} price={modPrice} />
				<button type='submit' className={style.button}>
					Add
				</button>
				{!amountIsValid && (
					<p className='bg-danger mt-1 '>
						Please enter a valid amount between 1 and 5{' '}
					</p>
				)}
			</form>
		</li>
	);
};
export default Item;
