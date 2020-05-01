import macImage from "../../public/img/macbook-circule.jpg";
import { loginSubmit } from "../actions/FormActions";
import "../../public/styles/pages/index.scss";
import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";
import validator from "validator";
import Tilt from "react-tilt";

class Index extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
  };

  componentWillUnmount = () => {
    this.setState({
      emailInput: "",
      passwordInput: "",
    });
  };

  handleEmailChange = (ev) => {
    const { emailInput } = this.state;
    this.setState({ emailInput: ev.target.value });
  };

  handlePasswordChange = (ev) => {
    const { passwordInput } = this.state;
    this.setState({ passwordInput: ev.target.value });
  };

  handleFormSubmit = () => {
    this.handleValidatingData();
  };

  handleValidatingData = () => {
    const { emailInput, passwordInput } = this.state;
    const { dispatch, history } = this.props;
    let emailIsValidate = validator.isEmail(emailInput);
    if (
      emailInput.length !== 0 &&
      passwordInput.length !== 0 &&
      passwordInput.length > 7 &&
      emailIsValidate
    ) {
      dispatch(
        loginSubmit(
          {
            email: emailInput,
            password: passwordInput,
          },
          history
        )
      );
    } else {
      cogoToast.warn(
        "Your inputs should not be empty , your password must be over 7 characters and your email must be valid!"
      );
    }
  };

  render() {
    const { emailInput, passwordInput } = this.state;
    return (
      <div className="login-wrapper">
        <Helmet>
          <meta name="description" content="صفحه ی ثبت نام" />
          <meta property="og:site_name" content="صفحه ی ثبت نام" />
          <meta property="og:title" content="صفحه ی ثبت نام" />
          <meta property="og:description" content="صفحه ی ثبت نام" />
        </Helmet>
        <div className="img-wrapper">
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className="Tilt-inner">
              <img src={macImage} alt="" />
            </div>
          </Tilt>
        </div>
        <div className="form-wrapper">
          <h1 className="title">Member Login</h1>
          <div className="email-wrapper same">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
                          c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
                          C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"
                    />
                    <path
                      d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
                          c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
                          C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
                          v-268.25C512,132.927,509.583,129.146,505.813,127.406z"
                    />
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <input
              placeholder="Email"
              value={emailInput}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="password-wrapper same">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    d="M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32
			C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333
			V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292
			c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51
			c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667
			c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64
			s85.333,38.281,85.333,85.333V192z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <input
              placeholder="Password"
              value={passwordInput}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="btn-wrapper">
            <Link to="/signup" className="btn">
              SIGN UP
            </Link>
            <button onClick={this.handleFormSubmit} className="btn">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null)(Index);
