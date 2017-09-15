import React from 'react';
import CounterContainer from '../containers/CounterContainer';
import store from '../store';
import { Provider } from 'react-redux';

const Counter = () => {
	return (
		<div>
			<h2>Counter</h2>
			<Provider store={store}>
				<CounterContainer/>
			</Provider>
		</div>
	)
}

export default Counter;