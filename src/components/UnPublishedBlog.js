import React, { Component } from 'react'
import axios from 'axios'


class UnPublishedBlog extends Component {

  state = {
    blog:[]
  }

  componentDidMount(){
    axios
    .get("http://localhost:6543/api/blogs/unpublished")
    .then(res => {
       this.setState({blog :res.data})
       console.log("axios",this.state.blog)
      })
    .catch(err => console.log(err));
  }
  mapRender = () => {
    const {blog} = this.state;
    if(blog) {
      return blog.map(blog => {
        return <div key={blog.id}>
          <div className="card text-center" style={{width: '30rem', margin: 'auto'}}>
            <div className="card-header">{blog.title}</div>
            <div className="card-body">
              <p className="card-text">{blog.text}</p>
            </div>
            <div className="card-footer text-muted">
              Published by : {blog.author}
              <br/>
              on the {blog.date}
            </div>
          </div>
          <br />
          <br />
        </div>
      })
    }
  }

  render() {
    return (
      <div className="container">
        {this.mapRender()}
      </div>
    );
  }
}

export default UnPublishedBlog;
