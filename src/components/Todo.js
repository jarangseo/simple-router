import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onEnter, todoText, handleChange}) => {
	return (
		<input name="todoText" placeholder="type ur todo work" onKeyPress={onEnter} value={todoText} onChange={handleChange}/>
	)
}

Todo.propTypes = {
	todoText: PropTypes.string,
	onEnter: PropTypes.func,
	handleChange: PropTypes.func
}

Todo.defaultProps = {
	todoText: 'hellooo',
	onEnter: () => console.warn('onEnter is not defined'),
	handleChange: () => console.warn('handleChange is not defined')
}	
export default Todo;