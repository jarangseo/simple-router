import number from './number';
import color from './color';
import todoText from './todoText';
import counter from './counter';
import post from './post';
import posttab from './posttab';
import photos from './photos';
import users from './users';
import user from './user';
import { penderReducer } from 'redux-pender';

import { combineReducers } from 'redux';

/*
    서브 리듀서들을 하나로 합칩니다.
    combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
    지금의 경우:
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
    로 만들어집니다.
*/
console.log(counter);

const reducers = combineReducers({
    numberData: number,
    colorData: color,
    todoData: todoText,
    counter,
    post,
    posttab,
    photos,
    users,
    user,
    pender: penderReducer
});

export default reducers;