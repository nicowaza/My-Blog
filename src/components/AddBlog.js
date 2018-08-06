import React, { Component } from "react";
import axios from 'axios'



class AddBlog extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      text:"",
      ispublished: true
    }
    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const blog = {
      title : this.state.title,
      text: this.state.text,
      ispublished: this.state.ispublished
    }
  axios.post('http://localhost:6543/api/blogs/add', blog)
    .then(res => {
      console.log(res)
      this.props.history.push("/")
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Titre"
              name="title"
              onChange={this.onChange}
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="text"
              name="text"
              onChange={this.onChange}
              type="text"
              rows={3}
              />
          </div>

          <div className="form-group form-check">
            <input
              className="form-check-input"
              name="ispublished"
              value= "false"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              enregistrer comme brouillon
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddBlog;
