import './app.css';

import React, { Component } from 'react';
import PostList from './components/postList';
import PostForm from './components/postForm';

class App extends Component {
  state = {
    post: [
      {
        id: 1,
        title: '메모를 입력하세요',
        content: '',
        date: '2021. 8. 23. 10:00PM',
      },
    ],
  };

  handleUpload = (title, content, date) => {
    const post = [...this.state.post, { id: Date.now(), title, content, date }];
    this.setState({ post });
  };

  handleDelete = (posting) => {
    const post = this.state.post.filter((posts) => posts.id !== posting.id);
    this.setState({ post });
  };
  render() {
    return (
      <>
        <PostForm onUpload={this.handleUpload} />
        <ul className="post-list">
          {this.state.post.map((post) => (
            <PostList key={post.id} post={post} onDelete={this.handleDelete} />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
