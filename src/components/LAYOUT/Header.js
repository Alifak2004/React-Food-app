import React, {
	createRef,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import Showcase from './Showcase';
import style from './Header.module.css';
const Header = (props) => {
	const cartctx = useContext(CartContext);
	const [iseInter, setIsInter] = useState(false);
	const { items } = cartctx;

	const [runAnimation, setRunAnimation] = useState(false);
	const totalItemsNum = cartctx.items.reduce((currTotal, item) => {
		return (currTotal += item.amount);
	}, 0);
	const cartStyle = `${runAnimation ? style.bump : ''}`;

	useEffect(() => {
		if (items.length == 0) {
			return;
		}
		setRunAnimation(true);
		console.log(runAnimation);
		const timer = setTimeout(() => {
			setRunAnimation(false);
		}, 300);
		return () => {
			console.log(runAnimation);
			clearTimeout(timer);
		};
	}, [items]);

	// HOOKS

	const useIntersection = (element, rootMargin) => {
		const [isVisible, setState] = useState(false);

		useEffect(() => {
			const Observer = new IntersectionObserver(
				([entry]) => {
					setState(entry.isIntersecting);
				},
				{ rootMargin }
			);

			element.current && Observer.observe(element.current);

			return () => Observer.unobserve(element.current);
		}, []);
		return isVisible;
	};

	const ref = useRef();

	const inViewport = useIntersection(ref, '0px');
	console.log(!inViewport);
	const isFixed = `${!inViewport ? style.fixed : ''}`;
	return (
		<>
			<header
				ref={ref}
				className={` navbar bg-dark navbar-dark`}
				style={{ zIndex: '10' }}>
				<div className='container'>
					<h1 className='navbar-brand'>React Food app</h1>

					<nav id='mainNav'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
							<li className={`${style.cart} ${isFixed} ${cartStyle}`}>
								<Link
									className={` p-3 text-white d-flex p-3 nav-link align-items-center`}
									to='/cart'
									onClick={props.showCartOnClick}>
									Your Cart
									<i className='fas fa-shopping-cart px-1'></i>
									<div className='rounded opacity-75 bg-light text-dark px-3 ms-2'>
										{totalItemsNum}
									</div>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Showcase />
		</>
	);
};
export default Header;
