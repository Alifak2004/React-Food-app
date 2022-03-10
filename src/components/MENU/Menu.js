import style from './Menu.module.css';
import Item from './MENUITEM/Item';
import Card from '../UI/Card';

const menu = [
	{
		id: 'w1',
		title: 'Steak',
		disc: 'taste our amazing steak made by our finest chefs ',
		price: '19.99',
	},
	{
		id: 'w2',
		title: 'Chicken escalope',
		disc: 'taste our amazing ...',
		price: '15.00',
	},
	{
		id: 'w3',
		title: 'Cordon blue',
		disc: 'taste our amazing ...',
		price: '12.33',
	},
	{
		id: 'w4',
		title: 'Chicken alfredo',
		disc: 'taste our amazing ...',
		price: '21.59',
	},
];

const Menu = () => {
	const menuMap = menu.map((item) => {
		return <Item key={item.id} item={item} />;
	});

	return (
		<Card>
			<div className='container pb-4'>
				<ul className={style.ul}>{menuMap}</ul>
			</div>
		</Card>
	);
};

export default Menu;
