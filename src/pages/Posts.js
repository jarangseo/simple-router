import React from 'react';
import Posttab from '../containers/PostTabContainer';
import { Provider } from 'react-redux';
import store from '../store';

const Posts = () => {
	return (
		<div>
			<h1>Posts</h1>
			<Provider store={store}>
    			<Posttab/>
  			</Provider>
		</div>
	)
}

export default Posts;