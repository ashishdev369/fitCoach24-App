import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Registration.css'
import { registerUserAction } from '../actions/authenticationActions';

class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

    this.props.dispatch(registerUserAction(data));
  }

  componentDidMount() {
    document.title = 'React Login';
  }

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <div className="container">
        <h3>RegisterPage</h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='login' />}
        <form onSubmit={this.onHandleRegistration}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">Name</label>
            </div>
            <div className="col-50">
              <input type="text" name="name" id="name" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-50">
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="password">Password</label>
            </div>
            <div className="col-50">
              <input type="password" name="password" id="password" />
            </div>
          </div>
          <div className="row">
          <div className="col-75">
            <input type="submit" value="Register" />
            </div>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);
