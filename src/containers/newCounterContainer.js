import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../reducers/counter';
import * as postActions from '../reducers/post';
import axios from 'axios';

class App extends Component {
    componentDidMount() {
        const { number } = this.props;
        this.getPost(number);
    }

    componentWillReceiveProps(nextProps) {
        const { PostActions } = this.props;

        if(this.props.number != nextProps.number) {
            this.getPost(nextProps.number)
        }
    }

    getPost = async (postId) => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost(postId);
            console.log('요청이 완료된 다음에 실행됨')
        } catch(e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                { loading && <h2>로딩중...</h2>}
                { error
                    ? <h1> 에러발생! </h1>
                    : (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.title}</p>
                        </div>
                    )}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        // loading: state.post.pending,
        // error: state.post.error
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);