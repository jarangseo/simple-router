import React from 'react';
import Post from './Post';
import store from '../store';
import Newcounter from '../containers/newCounterContainer';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

const PostsList = ({match}) => {
	return (
		<div>
			<h2>
				Posts List
			</h2>
			<Provider store={store}>
    			<Newcounter/>
  			</Provider>
			
			<Route exact path={match.url} render={()=>(
				<ul>
					<li><Link to ='postslist/1' data-id="1">Post #1</Link></li>
					<li><Link to ={`${match.url}/2`}>Post #2</Link></li>
					<li><Link to ={`${match.url}/3`}>Post #3</Link></li>
					<li><Link to ={`${match.url}/4`}>Post #4</Link></li>
				</ul>
			)}/>
			<Route path={`${match.url}/:id`} component={Post}/>
		</div>
	)
}

export default PostsList;
