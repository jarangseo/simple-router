import * as types from '../actions/ActionTypes';

const initialState = {
    todoText: "hello"
};

const todoText = (state = initialState, action) => {
    switch(action.type) {
        case types.PRESS_ENTER: 
            return {
                todoText: "E"
            };
        default:
            return state;
    }
}

export default todoText;