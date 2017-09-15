import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Posts, Photos, Users, Counter, About, PostsList } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
	render() {
		return (
			<div className="col-xs-12 col-sm-6 col-sm-offset-3">
				<Menu/>
				<Route exact path="/" component={Home}/>
				<Route exact path="/posts" component={Posts}/>
				<Route exact path="/Photos" component={Photos}/>
				<Switch>
					<Route path="Users/:id" component={Users}/>
					<Route path="/Users" component={Users}/>
				</Switch>
				<Route path="/counter" component={Counter}/>
				<Switch>
					<Route path="/about/:name" component={About}/>
					<Route path="/about" component={About}/>
				</Switch>
				<Route path="/postslist" component={PostsList}/>
			</div>
		)
	}
}

export default App;