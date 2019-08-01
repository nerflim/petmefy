import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedItem = () => {
	return (
		<Link to='/' className='max-w-sm rounded overflow-hidden shadow bg-white p-2 block'>
			<div className='relative'>
				<span className='inline-block bg-teal-200 rounded-full px-3 py-1 text-xs text-gray-700 absolute right-0 m-2'>FOR SALE</span>
				<img className='w-full' src='https://tailwindcss.com/img/card-top.jpg' alt='Sunset in the mountains' />
			</div>
			<div className='p-2'>
				<p className='font-bold text-sm'>I'm a pet</p>
				<p className='text-xs text-gray-500'>Breed type here</p>
			</div>
		</Link>
	);
};

export default FeaturedItem;
