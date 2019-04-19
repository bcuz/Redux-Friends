import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getFriends} from "../actions";

class FriendsList extends Component {

  componentDidMount() {
    // call our action
    this.props.getFriends()
  }

  render() {
    return (
      <div>
      {!this.props.fetchingData && this.props.friends.length > 0  && (
        
        <ul>{this.props.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}</ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { friends: state.friends}
}

const componentConnecter = connect(mapStateToProps, {getFriends})

export default componentConnecter(FriendsList);