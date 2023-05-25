import React, { Component } from "react";
import { postQuestion } from "../Api/Question";
import "./AskQuestion.css";

export default class AskQuestion extends Component {
  state = {
    title: "",
    content: "",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    postQuestion({ title: title, content: content })
      .then((response) => {
        console.log('Question posted')
        alert('Question submitted successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error submitting question. Please try again later.');
      });
  };
  

  render() {
    const { title, content } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="display-4 mt-4 mb-3">Ask a Question</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="h5">Question Title</label>
            <input
              type="text"
              className="form-control shorter-input"
              id="title"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="h5">Question Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="6"
              value={content}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</main>


        </div>
      </div>
    );
  }
}