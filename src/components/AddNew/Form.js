import classes from './Form.module.css';
import useForm from '../../hooks/use-form';
import useHttp from '../../hooks/use-http';
import Loading from '../UI/Loading';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const authorVerification = (val) => val == '';
const Form = () => {
	// init date
	const date = new Date();

	//init state
	const navigate = useNavigate();
	// init usehttp
	const { loading, error, fetchData: addToData } = useHttp();

	// usehttp custom hook
	const {
		value: authorValue,
		errorMassage,
		onBlurHandler: authorOnBlur,
		onChangeHandler: authorOnChange,
		InputIsNotValid: authorNotValid,
		InputIsValid,
	} = useForm(authorVerification, 'Author Input is not valid');

	const {
		value: quoteValue,
		errorMassage: quoteErrorMessage,
		onBlurHandler: quoteOnBlur,
		onChangeHandler: quoteOnChange,
		InputIsNotValid: quoteNotValid,
		InputIsValid: quoteIsValid,
	} = useForm(authorVerification, 'Quote Input is not valid');

	let formIsValid = false;

	if (InputIsValid && quoteIsValid) {
		formIsValid = true;
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		if (!formIsValid) {
			return;
		}

		const newQuote = {
			title: quoteValue,
			author: authorValue,
			date: date,
		};

		await addToData({
			url: 'https://react-app-955c0-default-rtdb.firebaseio.com/quotes.json',
			body: JSON.stringify(newQuote),
			method: 'POST',
		});
		// console.log(newQuote);
		navigate('/quotes');
	};

	if (error) {
		return <div>Something went wrong... Try refreshing the page</div>;
	}
	if (loading) {
		return <Loading />;
	}
	return (
		<form className='container card' onSubmit={onSubmitHandler}>
			<div className='card-title display-6 p-3'>Add New Quote</div>
			<div className='underline mb-3'></div>
			<div className='card-body'>
				<div className='form-group'>
					<label className='form-label'>Quote</label>
					<textarea
						onChange={quoteOnChange}
						onBlur={quoteOnBlur}
						className={`${quoteErrorMessage ? 'is-invalid' : 'mb-3'} ${
							classes.textarea
						} mb-2 form-control`}
					/>
					{quoteErrorMessage ? (
						<div className='text-danger mb-3'>{quoteErrorMessage}</div>
					) : null}
				</div>
				<div className='form-group'>
					<label className='form-label'>Author</label>
					<input
						onChange={authorOnChange}
						onBlur={authorOnBlur}
						className={`${
							errorMassage ? 'is-invalid' : null
						} form-control w-20`}
					/>
					{errorMassage ? (
						<div className='text-danger mt-2'>{errorMassage}</div>
					) : null}
				</div>
			</div>
			<input
				type='submit'
				className='btn d-inlin-block me-5 ms-auto my-3 p-3 px-5 btn-dark'
			/>
		</form>
	);
};

export default Form;
