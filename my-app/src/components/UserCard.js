import React from 'react'


class UserCard extends React.Component {
    constructor(){
        super();
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        console.log(this.props)
    }
    render(){
        return(
        <div className="Card">
        <h1>Github Users</h1>
        <input
          type="text"
          value={this.state.users}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchFollowers}>Fetch Followers</button>
        <div className="users">
          {this.state.users.map((user) => (
            <img width="150" className="user" key={user} src={user} alt={"user"}/>
          ))}
        </div>
      </div>
        )
    }
}
export default UserCard;