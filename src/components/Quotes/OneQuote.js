import classes from './OneQuote.module.css';
import Button from '../UI/Button';
const OneQuote = ({ item: { quote, id, author, date } }) => {
	let dateDiv;
	const dateMod = new Date(date);

	if (date) {
		const day = dateMod.getDate();
		const month = dateMod.toLocaleString('Lebanon', { month: 'long' });
		const year = dateMod.getFullYear();
		const hours = dateMod.getHours();
		const minutes = dateMod.getMinutes();
		const seconds = dateMod.getSeconds();

		dateDiv = (
			<div className={classes.date}>
				posted at {day}/{month}/{year} {hours}-{minutes}-{seconds}
			</div>
		);
	}

	return (
		<div className='card p-4 h4 fw-normal mt-2'>
			<div className='d-flex align-items-center justify-content-between'>
				<div className='d-flex flex-column'>
					<div className={classes.quote}>{quote}</div>
					{dateDiv}
				</div>

				<div className=''>
					<div className={classes.button}>
						<Button
							link={`/quotes/${id}`}
							color='dark'
							type='submit'
							value='More Details'
						/>
					</div>
					<div className={` ${classes.author} `}>{author}</div>
				</div>
			</div>
		</div>
	);
};

export default OneQuote;
