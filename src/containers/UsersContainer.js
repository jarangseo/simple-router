import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../reducers/users';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {
    componentDidMount() {
        this.getPost();
    }

    componentWillReceiveProps(nextProps) {
        const { PostActions } = this.props;
    }

    getPost = async () => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost();
            console.log('요청이 완료된 다음에 실행됨')
        } catch(e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const { post, error, loading } = this.props;
        console.log(post[0]);
        console.log(this.props.url);
        const userList = post.length > 0 ? 
            post.map((item) => 
                <tr>
                    <td>{item.id}</td>
                    <td>
                        <Link to={`${this.props.url}/${item.id}`} data-id={item.id}>{item.name}</Link>
                    </td>
                    <td>{item.email}</td>
                </tr>
            )
            : `<p> empty </p>`
        return (
            <tbody>{userList}
            </tbody>
        );
    }
}

export default connect(
    (state) => ({
        post: state.posttab.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);