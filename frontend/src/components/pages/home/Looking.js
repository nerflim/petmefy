import React from 'react';
import { Link } from 'react-router-dom';

const Looking = () => {
	return (
		<div className='bg-blue-900 text-white'>
			<div className='container mx-auto px-8 py-24 text-center'>
				<h1 className='text-2xl font-bold'>Looking for a pet?</h1>
				<p className='mb-5'>We highly recommend to adopt a pet and be their forever home.</p>
				<Link to='/adopt' className='p-3 text-white bg-blue-500 hover:bg-blue-400 rounded mx-3 inline-block'>
					Adopt now!
				</Link>
				<Link to='/shop' className='p-3 text-white bg-blue-500 hover:bg-blue-400 rounded mx-3 inline-block'>
					Shop Pets
				</Link>
			</div>
		</div>
	);
};

export default Looking;
