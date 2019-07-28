import React from 'react';
import FeaturedItem from './FeaturedItem';

const Featured = () => {
	return (
		<div className='bg-gray-200'>
			<div className='mx-auto p-5'>
				<h1 className='text-xl font-semibold text-center mb-5'>RECENT</h1>
				<div className='px-2'>
					<div className='flex mx-2 my-8'>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
					</div>
					<div className='flex mx-2'>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
						<div className='w-1/4 px-2'>
							<FeaturedItem />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
