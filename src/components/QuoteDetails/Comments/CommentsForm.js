import useForm from '../../../hooks/use-form';
import useHttp from '../../../hooks/use-http';
import Loading from '../../UI/Loading';

const verification = (val) => val == '';
const CommentForm = ({ id, ChangeDetails, hideForm }) => {
	// init usehttp
	const { loading, error, fetchData: addToData } = useHttp();

	const {
		value,
		errorMassage,
		onBlurHandler,
		onChangeHandler,
		InputIsNotValid,
		clearAllState,
		InputIsValid,
	} = useForm(verification, "Can't share an empty comment");

	let formIsValid = false;
	if (InputIsValid) {
		formIsValid = true;
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		if (!formIsValid) {
			return;
		}

		const newComment = {
			comment: value,
		};

		const afterFetchingFunc = (Comment, data) => {
			const newComment = {
				id: data.name,
				comment: Comment.comment,
			};
			ChangeDetails(newComment);
		};

		await addToData(
			{
				url: `https://react-app-955c0-default-rtdb.firebaseio.com/quotes/${id}/comments.json`,
				body: JSON.stringify(newComment),
				method: 'POST',
			},
			afterFetchingFunc.bind(this, newComment)
		);
		hideForm();
	};

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <div className='centered'>Something went wrong</div>;
	}
	return (
		<form className='container card border-3 mt-4' onSubmit={onSubmitHandler}>
			<div className='form-group card-body mt-y'>
				<label className='form-label'>Add Comment</label>
				<input
					value={value}
					onChange={onChangeHandler}
					onBlur={onBlurHandler}
					className={`${errorMassage ? 'is-invalid' : null} form-control`}
				/>
				{errorMassage ? (
					<div className='bg-danger rounded-2 mt-1 text-light'>
						{errorMassage}
					</div>
				) : null}
			</div>
			<button
				type='submit'
				className='btn btn-dark d-block me-auto p-2 m-4 mt-0'>
				Submit
			</button>
		</form>
	);
};

export default CommentForm;
