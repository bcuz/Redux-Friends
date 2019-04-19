import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getFriends, addFriend} from "../actions";

class FriendsList extends Component {
  state = {
    name: ''
  }

  componentDidMount() {
    // call our action
    this.props.getFriends()
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addFriend(this.state)

    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
      {this.props.fetchingData && <p>Loading...</p>}
      {/* maybe could be shorter idk */}
      {!this.props.fetchingData && this.props.friends.length > 0  && (
        
        <ul>{this.props.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}</ul>
        )}

        <h2>add new friend</h2>
        <form onSubmit={this.handleSubmit} action="">
          <input onChange={this.handleInputChange} placeholder="name" type="text" name="name" value={this.state.name} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { friends: state.friends, fetchingData: state.fetchingData}
}

export default connect(mapStateToProps, {getFriends, addFriend})(FriendsList);