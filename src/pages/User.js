import React from 'react';
import { Link, Route } from 'react-router-dom';
import store from '../store';
import Usercontainer from '../containers/UserContainer';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

const User = ({match, browserHistory}) => {
	let goback = () => {
		console.log('e');
		window.history.back();
		// location.href = './users';
		// browserHistory.go('/users');
	};

	return (
		<div>
			<div>
				<h1>User</h1>
				<table className="table table-bordered table-condensed">
					<colgroup>
						<col width="100"/>
						<col/>
					</colgroup>
					<Provider store={store}>
		    			<Usercontainer id={match.params.id}/>
		  			</Provider>	
				</table>
				<p>
			        <button type="button" class="btn btn-primary btn-block" onClick={goback}>Users List</button>
			    </p>
			</div>
		</div>
	)
}

export default User;
