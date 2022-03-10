import style from './Price.module.css';
import { forwardRef } from 'react';
const Price = forwardRef((props, ref) => {
	return (
		<div className={style.priceEle}>
			<label className={style.label}>Amount</label>
			<input
				className={style.input}
				min='1'
				max='5'
				defaultValue='1'
				step='1'
				ref={ref}
			/>
		</div>
	);
});
export default Price;
