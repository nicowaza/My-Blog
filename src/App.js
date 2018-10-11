import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Withrouter, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'
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
import setAuthToken from './utils/setAuthtoken'
import decodedToken from './components/Login'
import './App.css';


setAuthToken(localStorage.jwtToken)

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: {},
      isAdminAuth: false
    }
    this.isUseradmin = this.isUseradmin.bind(this)
  }
  // // // check for token
  // if(localStorage.jwtToken) {
  // //   // Set auth token header auth
  // //   setAuthToken(localStorage.jwtToken);
  // //   // Decode token to get user info
  // const decodedToken = jwt_decode(localStorage.jwtToken)
  // }
  isUseradmin(){
    if(localStorage.jwtToken) {
    const decodedToken = jwt_decode(localStorage.getItem('jwtToken'))
    console.log("afterDecoded:" + decodedToken.isAdmin);
      if(decodedToken.isAdmin === true){
        this.setState({isAdminAuth: true})
      }
  } else {
    this.setState({
      isAdminAuth : false
    })
  }
}
  componentDidMount(){
  this.isUseradmin()
  }

  render() {
    const isAdminAuth = this.state.isAdminAuth

   let routes = (
     <Switch>
       <Route path="/" component={PublishedBlog} exact />
       <Route path="/register" component={Register} />
       <Route path="/login" component={Login} />
   </Switch>
)
   if (isAdminAuth === true){
     routes = (
       <Switch>
         <Route path="/blog/add" component={AddBlog}/>
         <Route path="/blog/edit" component={EditBlog}/>
         <Route path="/unpublished" component={UnPublishedBlog}/>
         <Route path="/blog/single" component={SingleBlog}/>
       {/* <Redirect to='/' component={PublishedBlog} exact/> */}
     </Switch>
     )
}

    return (

        <BrowserRouter>
          <div>
                <Navbar isAdminAuth={this.state.isAdminAuth}/>
                  {routes}
                <Footer />
          </div>
        </BrowserRouter>

    )
  }
}


export default App;
