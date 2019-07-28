import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
	return (
		<div className='p-5'>
			<div className='px-2 container mx-auto'>
				<h1 className='text-2xl font-bold mb-3'>Top Pet Categories</h1>
				<div className='flex -mx-2 mb-5'>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img src='https://i.gifer.com/14W4.gif' className='w-10 h-10 rounded-full' alt='Top Pet Category' />
								<p className='text-base ml-5'>Dogs</p>
							</div>
						</Link>
					</div>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img
									src='https://p7.hiclipart.com/preview/851/512/1003/pug-lolcat-pet-bonsai-kitten-looking-at-the-cat-thumbnail.jpg'
									className='w-10 h-10 rounded-full'
									alt='Top Pet Category'
								/>
								<p className='text-base ml-5'>Cats</p>
							</div>
						</Link>
					</div>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img
									src='https://www.sagegrouseinitiative.com/wp-content/uploads/2016/02/sagebrush-bird-webinar-thumbnail.jpg'
									className='w-10 h-10 rounded-full'
									alt='Top Pet Category'
								/>
								<p className='text-base ml-5'>Birds</p>
							</div>
						</Link>
					</div>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img src='https://i.gifer.com/14W4.gif' className='w-10 h-10 rounded-full' alt='Top Pet Category' />
								<p className='text-base ml-5'>Dogs</p>
							</div>
						</Link>
					</div>
				</div>
				<div className='flex -mx-2'>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img src='https://i.gifer.com/14W4.gif' className='w-10 h-10 rounded-full' alt='Top Pet Category' />
								<p className='text-base ml-5'>Dogs</p>
							</div>
						</Link>
					</div>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img
									src='https://p7.hiclipart.com/preview/851/512/1003/pug-lolcat-pet-bonsai-kitten-looking-at-the-cat-thumbnail.jpg'
									className='w-10 h-10 rounded-full'
									alt='Top Pet Category'
								/>
								<p className='text-base ml-5'>Cats</p>
							</div>
						</Link>
					</div>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img
									src='https://www.sagegrouseinitiative.com/wp-content/uploads/2016/02/sagebrush-bird-webinar-thumbnail.jpg'
									className='w-10 h-10 rounded-full'
									alt='Top Pet Category'
								/>
								<p className='text-base ml-5'>Birds</p>
							</div>
						</Link>
					</div>
					<div className='w-1/4 px-2'>
						<Link to='/'>
							<div className='border rounded shadow hover:shadow-md hover:border-gray-400 p-3 flex items-center'>
								<img src='https://i.gifer.com/14W4.gif' className='w-10 h-10 rounded-full' alt='Top Pet Category' />
								<p className='text-base ml-5'>Dogs</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
