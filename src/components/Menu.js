import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<ul className="nav nav-tabs" role="tablist">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/posts">Posts</Link></li>
			<li><Link to="/photos">Photos</Link></li>
			<li><Link to="/users">Users</Link></li>
			<li><Link to="/counter">Counter</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/about/foo">About Foo</Link></li>
			<li><Link to="/postslist">Postslist</Link></li>
		</ul>
	)
}

export default Menu;