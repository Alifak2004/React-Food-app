import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const Overlay = (props) => {
	return (
		<div className={classes.modalContainer}>
			<div className={classes.modal}>
				<div className={classes.content}>{props.children}</div>
			</div>
		</div>
	);
};
const protalTo = document.getElementById('modal');
const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, protalTo)}
			{ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, protalTo)}
		</>
	);
};
export default Modal;
