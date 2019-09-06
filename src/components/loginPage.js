import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';
import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import FacebookLogin from '../social/FacebookLogin'
import GoogleLogin from '../social/GoogleLogin'
import LinkedinLogin from '../social/LinkedinLogin'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  onHandleLogin = (event) => {
    event.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  handleChange = (e) => {
    console.log(e.target.id + " : " + e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  componentDidMount() {
    document.title = 'fitCoach24';
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response && this.props.response.login && this.props.response.login.response && this.props.response.login.response.success;
      message = this.props.response && this.props.response.login && this.props.response.login.response && this.props.response.login.response.message;

      if (isSuccess) {
        setCookie('token', this.props.response.login.response.accessToken, 1);
      }
    }
    
    return (
      <div>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <div id="main" role="main">
          <div className="col-md-12">
            <div className="col-md-7" style={{ padding: 6 }}>
              <img className='imgFitCoach' src={require('../assets/images/fitCoachLogin.png')} />
            </div>
            <div className="col-md-5 top-margin">
              <div className="col-md-12 offset-md-2">
                <div className="forms-container">
                  <h3 align="center"><strong>Welcome</strong> to FitCoach24</h3>
                  <hr style={{ width: '30px', 'backgroundColor': 'red' }} />
                  <p style={{ fontSize: '14px' }}> To stay connected with us please login with your email and password.</p>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <input type="text" id="email" className="form-control text" placeholder="Username" autoComplete="off" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.handleChange.bind(this)} />
                    </div>
                    <center><button type="button" className="btn btn-info" onClick={this.onHandleLogin.bind(this)}>Sign in</button></center>
                  </form>
                  <center><span>or you can join with</span></center>
                  <div className="socio-icons">
                    <FacebookLogin/>
                    <GoogleLogin/>
                  </div>
                  <div className="terms-condition">
                    <span style={{ display: 'block', textAlign: 'center' }}>By proceeding further, you are agreeing to</span>
                    <center><a href="">Terms & Conditions</a></center>
                  </div>
                  <div className="sign-up">
                    <center><span> New User? <Link to='register'>Register here</Link></span></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);