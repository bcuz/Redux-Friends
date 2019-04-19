import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
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

const componentConnecter = connect(mapStateToProps)

export default componentConnecter(App);