'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';
import {createFetchFollowers} from '../actions';
import store from '../store';
import {connect} from 'react-redux';

@connect((state) => ({followers: state.followers}))
export default class Followers extends React.Component {

  static fetchTransitionData() {
    return store.dispatch(createFetchFollowers());
  }

  componentDidMount(){
    this.constructor.fetchTransitionData();
  }

  renderFollower(follower, index) {
    return (
      <li key={index}>{follower}</li>
    );
  }

  render () {
    var followers = this.props.followers || [];
    return (
      <DocumentTitle title='Followers'>
        <div>
          <h4>Followers</h4>
          <ul>
            {followers.map(this.renderFollower)}
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}
