import style from './Showcase.module.css';
import showcaseImage from '../../images/showcaseImage.jpg';
const Showcase = () => {
	return (
		<div className='showcase text-light'>
			<img src={showcaseImage} className={style.imageStyle} />
			<div className='container'>
				<div className='showcase-text text-center py-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid
					ducimus tenetur, cum veniam minima laudantium, consectetur dicta eos
					ullam cupiditate modi animi impedit facere consequatur eaque quaerat
					expedita quibusdam?
				</div>
			</div>
		</div>
	);
};
export default Showcase;
