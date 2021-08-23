import React, { Component } from 'react';

class PostForm extends Component {
  titleRef = React.createRef();
  contentRef = React.createRef();

  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth();
  date = this.today.getDate();
  hours = this.today.getHours();
  minutes = this.today.getMinutes();

  uploadDate = `${this.year}. ${this.month + 1}. ${this.date}. ${
    this.hours < 12 ? this.hours : this.hours - 12
  }:${this.minutes} ${this.hours < 12 ? 'AM' : 'PM'}`;

  handleUpload = () => {
    let title = this.titleRef.current.value;
    let content = this.contentRef.current.value;
    this.props.onUpload(title, content, this.uploadDate);
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        action="#"
        method="POST"
        className="post-form"
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.titleRef}
          type="text"
          id="form-title"
          placeholder="제목"
        />
        <textarea
          ref={this.contentRef}
          name=""
          id="form-contents"
          cols="30"
          rows="10"
          className="contents"
          placeholder="내용"
        ></textarea>

        <button
          type="submit"
          className="submit-btn"
          onClick={this.handleUpload}
        >
          올리기
        </button>
      </form>
    );
  }
}

export default PostForm;
