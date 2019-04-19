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
      {this.props.friends[0]}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { friends: state.friends}
}

const componentConnecter = connect(mapStateToProps, {getFriends})

export default componentConnecter(FriendsList);