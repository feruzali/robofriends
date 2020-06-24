import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	render() {
		const filteredRobots = this.state.robots.filter( robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
		  	<div className='tc'>
		  		<h1 className='f1'>Robofriends</h1>
		  		<SearchBox searchChange={this.onSearchChange} />
			    <CardList robots={filteredRobots} />
		  	</div>
		);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			return response.json();
		})
		.then( users => {
			this.setState({ robots: users })
		});
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value});
	}
}

export default App;
