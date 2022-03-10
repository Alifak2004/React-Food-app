import style from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={`${style.cont} container`}>
				<div>Copyright &copy; made in 2022</div>
				<div className={style.someLinks}>
					<h4 className={style.headerLink}>Some Links: </h4>
					<ul className={style.ul}>
						<li>
							<a className={style.a} href='/contactus'>
								Contact us
							</a>
						</li>
						<li>
							<a className={style.a} href='/privacyPolicy'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a className={style.a} href='howTo'>
								How to order
							</a>
						</li>
						<li>
							<a className={style.a} href='/What'>
								What makes us special
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
