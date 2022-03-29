import classes from './OneQuote.module.css';
import Button from '../UI/Button';
const OneQuote = ({ item: { quote, id, author } }) => {
	return (
		<div className='card p-4 h4 fw-normal mt-2'>
			<div className='d-flex align-items-center justify-content-between'>
				<div className='card-title'>{quote}</div>

				<div className='d-flex flex-column ms-3'>
					<div className={classes.button}>
						<Button
							link={`/quotes/${id}`}
							color='dark'
							type='submit'
							value='More Details'
						/>
					</div>
					<div className={`align-self-end justify-self-end card-body`}>
						{author}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneQuote;
