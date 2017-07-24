import React, { Component } from 'react';
import Post from '../Post/Post';
import logo from './images/logo.svg';
import './css/App.css';
import './css/index.css';

class App extends Component {
  state = {users: [], links: [], posts: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch('/links')
      .then(res => res.json())
      .then(links => this.setState({ links }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Home</h2>
        </div>
        <p className="App-intro">
          here is a start.
        </p>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <h1>Links</h1>
        {this.state.links.map(links =>
          <div key={links.id}>{links.url}</div>
        )}
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default App;