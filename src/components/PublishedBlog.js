import React, { Component } from 'react'
import axios from 'axios'


class PublishedBlog extends Component {

  state = {
    blog:[]
  }

  componentDidMount(){
    axios.get()
  }
  render () {
    return(
      <div className="container">
        <div className="card text-center">
           <div className="card-header">
             title
           </div>
             <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
           <div className="card-footer text-muted">
             Published by : Admin le Date
           </div>
           <br/>
           <br/>
        </div>
      </div>

    )

  }
}

export default PublishedBlog;
