import React from 'react';
import User from './User';
import Userscontainer from '../containers/UsersContainer';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const Users = ({match}) => {
	return (
		<div>
			<Route exact path={match.url} render={()=>(
				<div>
					<h1>Users</h1>
					<table className="table table-bordered table-condensed">
						<colgroup>
							<col width="50"/>
							<col/>
							<col width="200"/>
						</colgroup>
						<Provider store={store}>
			    			<Userscontainer url={match.url}/>
			  			</Provider>	
					</table>
				</div>
			)}/>
			<Route path={`${match.url}/:id`} component={User}/>
		</div>
	)
}

export default Users;