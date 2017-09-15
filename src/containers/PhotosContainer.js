import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../reducers/photos';
import axios from 'axios';

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
        
        const postList = post.length > 0 ? 
                    post.map((item) => 
                        <div className="thumbnail">
                            <img src={item.thumbnailUrl} alt={item.title}/>
                            <div className="caption">
                                <p>
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    )
                    : `<p> empty </p>`
        return (
            <div id="view" className="tab-content">
                { loading && <h2>로딩중...</h2>}
                { error
                    ? <h1> 에러발생! </h1>
                    : (
                        <div>
                            <ul className="list-group">
                            {postList}
                            </ul>
                        </div>
                    )}
            </div>
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