import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link to='/' className='navbar-brand'>
					PETMEFY
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link to='/shop' className='nav-link'>
								Shop
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/adopt' className='nav-link'>
								Adopt
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>
								Community
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
