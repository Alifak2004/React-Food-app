import OneComment from './OneComment';
import Button from '../../UI/Button';

const CommentList = ({ hideComments, showForm, form, hideForm, comments }) => {
	let list;
	list = comments.map((comment) => {
		return <OneComment item={comment.comment} key={comment.id} />;
	});

	return (
		<div className='container'>
			<div className='d-md-flex justify-content-between my-4 align-items-center'>
				<div className='display-6 align-self-end'>Comments</div>
				<div className='d-flex'>
					<Button
						btn='button'
						onClick={hideComments}
						className=' d-block me-1 p-2 p-md-2 mt-4 fs-md-3'
						color='danger'
						value='Hide Comments'
					/>
					{!form ? (
						<Button
							btn='button'
							onClick={showForm}
							className=' d-block py-3 mt-4 fs-md-3'
							color='secondary'
							value='Add Comment'
						/>
					) : (
						<Button
							btn='button'
							onClick={hideForm}
							className=' d-block py-3 mt-4 fs-md-3'
							color='danger'
							value='hide form'
						/>
					)}
				</div>
			</div>
			{comments.length !== 0 ? (
				list
			) : (
				<div className='h4 mt-4 container'>
					No Comments yet. Be the first to comment !!
				</div>
			)}
		</div>
	);
};

export default CommentList;
