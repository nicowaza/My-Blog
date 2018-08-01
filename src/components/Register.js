import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'/*pour redirect à partir d'une action on doit utiliser withRouter*/
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      lastName: "",
      firstName: "",
      email: "",
      password: "",
      password2: "",
      // errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentWillRecieveProps(nextProps){
  //   if(nextProps.errors){
  //     this.setState({errors: nextProps.errors})
  //   }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      // errors: {}
    };

    this.props.registerUser(newUser, this.props.history); /*redirect avec authActions*/
  }
  render() {
    const { errors } = this.props

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Créez votre compte utilisateur</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Nom"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Prénom"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Pseudo"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder=" Addresse Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="email"
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Mot de passe"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Confirmer le mot de passe"
                    value={this.state.password2}
                    onChange={this.onChange}
                    name="password2"
                    type="password"
                  />
                </div>
                <input
                  className="btn btn-info btn-block mt-4"
                  onSubmit={this.onSubmit}
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Pour pouvoir mapper les propriétés de le composant Register
Register.propTypes = {
  registerUser: PropTypes.func.isRequired /*ici registerUser est une fonction*/,
  auth: PropTypes.object.isRequired /*auth est un object*/
};

const mapStateToProps = state => ({
  auth: state.auth, /*mets le auth state dans une propriété qu'on pourra rapl plus tard avec this.props.auth + .user ou .isAuthenticated ou autre. Lauth de state.auth vient du rootReducer dans l'index(dans combineReducers) => auth: authReducer*/
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
