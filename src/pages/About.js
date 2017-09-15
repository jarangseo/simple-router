import React from 'react';
import queryString from 'query-string';
import Todo from '../containers/TodoContainer';
import { Provider } from 'react-redux';
import store from '../store';

import 'semantic-ui-css/semantic.min.css';

const About = ({location,match}) => {
	const query = queryString.parse(location.search);
	console.log(query);

	const detail = query.detail === 'true';

	return (
		<div>
			<h2>About{match.params.name}</h2>
			{detail && 'detail: blahblah'}
			<Provider store={store}>
				<Todo/>
			</Provider>
		</div>
	);
};

export default About;