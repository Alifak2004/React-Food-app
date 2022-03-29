import { Link } from 'react-router-dom';

const Button = ({ btn, type, value, color, link, className, onClick }) => {
	if (btn == 'button') {
		return (
			<button
				onClick={onClick}
				className={`btn ${color ? `btn-${color}` : 'btn-dark'} ${
					className ? `${className}` : null
				}`}
				type={type || 'button'}>
				{value || 'submit'}
			</button>
		);
	} else {
		return (
			<Link
				onClick={onClick}
				to={link || '/'}
				className={`btn ${color ? `btn-${color}` : 'btn-dark'} ${
					className ? `${className}` : null
				}`}
				type={type || 'button'}>
				{value || 'submit'}
			</Link>
		);
	}
};

export default Button;
