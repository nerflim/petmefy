import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-5 border-b-8 border-main'>
			<div className='container mx-auto'>
				<div className='flex mx-2 my-8'>
					<div className='w-1/3 px-2'>
						<span className='text-gray-200 text-2xl'>PETMEFY</span>
						<p className='text-gray-500 mb-1'>Pet Community for everyone.</p>
						<p className='text-xs text-gray-500'>
							Helping our pets reach out to each other
							<br />
							and to those who need home.
						</p>
						<div className='border-t my-3 border-gray-700 w-8/12' />
						<div className='social-media'>
							<Link to='/' className='text-gray-500 mr-3 text-2xl'>
								<FontAwesomeIcon icon={faFacebook} />
							</Link>
							<Link to='/' className='text-gray-500 mr-3 text-2xl'>
								<FontAwesomeIcon icon={faTwitter} />
							</Link>
							<Link to='/' className='text-gray-500 mr-3 text-2xl'>
								<FontAwesomeIcon icon={faInstagram} />
							</Link>
							<Link to='/' className='text-gray-500 mr-3 text-2xl'>
								<FontAwesomeIcon icon={faGlobe} />
							</Link>
						</div>
					</div>
					<div className='w-1/6 px-2'>
						<span className='font-bold text-gray-300'>PETMEFY</span>
						<ul className='text-xs mt-2'>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									About Us
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Legal
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Privacy Policy
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-1/6 px-2'>
						<span className='font-bold text-gray-300'>SHOP</span>
						<ul className='text-xs mt-2'>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Pets
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Toys
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Pet Insurance
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-1/6 px-2'>
						<span className='font-bold text-gray-300'>ADOPT</span>
						<ul className='text-xs mt-2'>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Adopt now!
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									How to adopt?
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Why adopt?
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-1/6 px-2'>
						<span className='font-bold text-gray-300'>COMMUNITY</span>
						<ul className='text-xs mt-2'>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Events
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Forum
								</Link>
							</li>
							<li className='mb-1'>
								<Link to='/' className='text-gray-500 hover:text-white'>
									Blogs
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
