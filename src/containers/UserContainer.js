import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../reducers/user';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {
    componentDidMount() {
        const { id } = this.props;
        this.getPost(id);
    }

    componentWillReceiveProps(nextProps) {
        const { PostActions } = this.props;
    }

    getPost = async (userId) => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost(userId);
            console.log('요청이 완료된 다음에 실행됨')
        } catch(e) {
            console.log('에러가 발생!');
        }
    }

    render() {
        const { post, error, loading } = this.props;
                        
        return (
            <tbody>
                <tr>
                    <th>name</th>
                    <td>{post.name}</td>
                </tr>
                <tr>
                    <th>e-mail</th>
                    <td>{post.email}</td>
                </tr>
                <tr>
                    <th>phone</th>
                    <td>{post.phone}</td>
                </tr>
                <tr>
                    <th>website</th>
                    <td>{post.website}</td>
                </tr>
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