import React from 'react';
import Photos from '../containers/PhotosContainer';
import { Provider } from 'react-redux';
import store from '../store';

const Posts = () => {
	return (
		<div>
			<h1>Photos</h1>
			<Provider store={store}>
    			<Photos/>
  			</Provider>
		</div>
	)
}

export default Posts;