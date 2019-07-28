import React from 'react';
import Banner from './home/Banner';
import Featured from './home/Featured';
import Looking from './home/Looking';
import Categories from './home/Categories';

const Home = () => {
	return (
		<div>
			<Banner />
			<Featured />
			<Looking />
			<Categories />
		</div>
	);
};

export default Home;
