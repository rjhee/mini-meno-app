import React, { Component } from 'react';

class PostList extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.post);
  };
  render() {
    const { title, content, date } = this.props.post;
    return (
      <li className="post">
        <header>
          <h2 className="post-list-title">{title}</h2>
          <button className="post-close-btn" onClick={this.handleDelete}>
            X
          </button>
        </header>
        <section>
          <span className="post-list-content">{content}</span>
          <span className="post-list-date">{date}</span>
        </section>
      </li>
    );
  }
}

export default PostList;
