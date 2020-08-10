import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
      following: []
    };
  }

componentDidMount() {
  console.log('CDMR');
  axios
  .get('https://api.github.com/users/sgoodrickjr')
  .then((res) => {
    this.setState({ user: res.data })
    console.log(this.state.user)
  })
  .catch((err) => console.log(err));
}

componentDidUpdate(prevState, prevProps) {
  if (prevState.users !== this.state.users) {
    console.log("users changed!")
  }
  if (prevState.followers !== this.state.followers) {
    console.log("followers state updated!")
  }
  if (prevState.following !== this.state.following) {
    console.log("following changed!")
  }
}

fetchFollowers() {
  axios
  .get('https://api.github.com/users/sgoodrickjr/followers')
  .then((res) => {
    this.setState({ followers: res.data })
  })
  .catch((err) => console.log(err));  
}

handleChanges = (e) => {
  console.log("handleChanges called");
  this.setState({
    ...this.state,
    followers: e.target.value
  });
};


  render() {
    console.log('Render');
  return (
    <UserCard users={this.state.users} followers={this.state.followers} />
  );  
}
}

export default App;
