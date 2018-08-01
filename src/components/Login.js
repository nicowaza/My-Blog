import React, { Component } from 'react'


class Login extends Component {
    constructor(){
      super()
      this.state = {
        email: "",
        password: "",
        errors: {}
      }
      this.onChange= this.onChange.bind(this)
      this.onSubmit= this.onSubmit.bind(this)
    }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
      e.preventDefault()
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      console.log(user)
    }
  render () {
    return(
      <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Connectez-vous</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input className="form-control form-control-lg" placeholder="Addresse Email" name="email" value={this.state.email} onChange={this.onChange}  type="email" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg" placeholder="Mot de passe" name="password" value={this.state.password} onChange={this.onChange} type="password" />
              </div>
              <input className="btn btn-info btn-block mt-4" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>

    )
  }
}

export default Login;
