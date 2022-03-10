import style from './Card.module.css';
const Card = (props) => {
	return <div className={style.cardBody}>{props.children}</div>;
};

export default Card;
