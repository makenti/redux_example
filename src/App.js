import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import * as postActions from './actions/postActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleCreatePost = this.handleCreatePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleCreatePost() {
    let data = {
      title: "welcome to world",
      body: "hello world",
      userId: 1
    }
    this.props.createPost(data);
  }
  render() {
    console.log(this.props.firstPost);
    // this.props.posts = [...this.props.posts, this.props.post];
    return (
      <div>
        <div className="post-container">
          
          <b>{this.props.firstPost.title}</b>

          { this.props.posts.map(post =>
            <div className="post-block" key={post.id}>
              <h3>{ post.title }</h3>
              <div>{ post.body }</div>
            </div>
          )}
        </div>

        <button onClick={this.handleCreatePost}>create post</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  firstPost: state.post.firstPost
})

const mapDispatchToProps = {
  getPosts: postActions.getPosts,
  createPost: postActions.createPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
