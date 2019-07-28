import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='navbar flex items-center justify-between flex-wrap p-6 w-full fixed text-white container rounded-full mt-5 shadow bg-main'>
			<div className='flex items-center flex-shrink-0 mr-6'>
				<Link to='/' className='text-lg font-bold'>
					PETMEFY
				</Link>
			</div>
			<div className='block lg:hidden'>
				<button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
					<svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
					<Link to='/shop' className='block mt-4 lg:inline-block lg:mt-0 mr-4'>
						Shop
					</Link>
					<Link to='/adopt' className='block mt-4 lg:inline-block lg:mt-0 mr-4'>
						Adopt
					</Link>
					<a href='!#' className='block mt-4 lg:inline-block lg:mt-0 mr-'>
						Community
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
