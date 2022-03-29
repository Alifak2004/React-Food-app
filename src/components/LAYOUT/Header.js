import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div className='mb-4 navbar navbar-expand-md bg-dark navbar-dark'>
			<div className='container'>
				<div className='navbar-brand'>Quotes Project</div>

				<button
					className='navbar-toggler'
					data-bs-target='#navbar-toggler'
					data-bs-toggle='collapse'>
					<i className='navbar-toggler-icon'></i>
				</button>

				<div
					id='navbar-toggler'
					className='justify-content-end collapse navbar-collapse'>
					<nav>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link to='/' className='nav-link'>
									All Quotes
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/addNew' className='nav-link'>
									Add a Quote
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
