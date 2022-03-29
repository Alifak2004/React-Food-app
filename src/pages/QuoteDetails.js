import { useState, useEffect, useCallback } from 'react';
import CommentList from '../components/QuoteDetails/Comments/CommentsList';
import Details from '../components/QuoteDetails/Details';
import Button from '../components/UI/Button';
import CommentForm from '../components/QuoteDetails/Comments/CommentsForm';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import Loading from '../components/UI/Loading';

const QuoteDetails = () => {
	const [showComments, setShowComments] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [detail, setDetail] = useState({});

	// init usehttp
	const { loading, error, fetchData } = useHttp();

	// getting id
	const params = useParams();
	const { id } = params;

	// fetching comments
	const ToDoAfter = useCallback((data) => {
		// modifieng Comments
		let commentsMod = [];
		if (data.comments) {
			for (const key in data.comments) {
				commentsMod.push({
					id: key,
					comment: data.comments[key].comment,
				});
			}
		}
		const newData = {
			...data,
			comments: commentsMod,
		};
		setDetail(newData);
	}, []);

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			fetchData(
				{
					url: `https://react-app-955c0-default-rtdb.firebaseio.com/quotes/${id}.json`,
				},
				ToDoAfter
			);
		}
		return () => {
			isMounted = false;
		};
	}, [fetchData]);

	const hideCommentsHandler = () => {
		setShowComments(false);
		setShowForm(false);
	};

	const AddCommentHandler = (newComm) => {
		setDetail((oldState) => {
			return {
				...oldState,
				comments: [...oldState.comments, newComm],
			};
		});
		console.log(detail);
	};

	// Loading state
	if (loading) {
		return <Loading />;
	}

	// Error state
	if (error) {
		return <div>Something went wrong</div>;
	}

	return (
		<>
			<Button className='py-2 ms-5 fs-6 p-3' value='Back' link='/quotes' />
			<Details detail={detail} />

			{!showComments ? (
				<Button
					btn='button'
					onClick={() => setShowComments(true)}
					className='m-auto d-block py-3 mt-4 fs-5'
					color='secondary'
					value='Comments'
				/>
			) : null}

			{showForm && showComments ? (
				<CommentForm
					ChangeDetails={AddCommentHandler}
					hideForm={() => setShowForm(false)}
					id={id}
				/>
			) : null}

			{showComments ? (
				<CommentList
					comments={detail.comments}
					form={showForm}
					showForm={() => setShowForm(true)}
					hideForm={() => setShowForm(false)}
					hideComments={hideCommentsHandler}
				/>
			) : null}
		</>
	);
};

export default QuoteDetails;
