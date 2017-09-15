import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import axios from 'axios';

function getPostAPI(postId) {
	return axios.get(`http://jsonplaceholder.typicode.com/albums/1/photos`)
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
	pending: false,
	error: false,
	data: {
		title: '',
		body: ''
	}
}

export default handleActions({
	...pender({
		type: GET_POST,
		onSuccess: (state, action) => {
			const photoData = action.payload.data;
			return {
				data: photoData
			}
		}
	})
}, initialState);