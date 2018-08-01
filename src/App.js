import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import Register from './components/Register'
import Login from './components/Login'
import PublishedBlog from './components/PublishedBlog'
import UnPublishedBlog from './components/UnPublishedBlog'
import SingleBlog from './components/SingleBlog'

import './App.css';



class App extends Component {
  render() {
    return (
      <Provider store= { store }>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
            <Route path="/" component={PublishedBlog} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/blog/add" component={AddBlog} exact/>
            <Route path="/blog/edit" component={EditBlog} exact/>
            <Route path="/unpublished" component={UnPublishedBlog} exact/>
            <Route path="/blog/single" component={SingleBlog} exact/>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
