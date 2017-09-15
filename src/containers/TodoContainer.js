import Todo from '../components/Todo';
import * as actions from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	todoText: state.todoData.todoText
});

const mapDispatchToProps = (dispatch) => ({
	onEnter: () => dispatch(actions.pressEnter())
});

const TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo);

export default TodoContainer;