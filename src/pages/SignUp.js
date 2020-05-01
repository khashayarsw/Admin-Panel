import macImage from "../../public/img/macbook-circule.jpg";
import { signUpSubmit } from "../actions/FormActions";
import "../../public/styles/pages/signup.scss";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";
import validator from "validator";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    emailInput: "",
    userNameInput: "",
    passwordInput: "",
  };

  componentWillUnmount = () => {
    this.setState({
      emailInput: "",
      userNameInput: "",
      passwordInput: "",
    });
  };

  handleEmailChange = (ev) => {
    const { emailInput } = this.state;
    this.setState({ emailInput: ev.target.value });
  };

  handleUserNameChange = (ev) => {
    const { userNameInput } = this.state;
    this.setState({ userNameInput: ev.target.value });
  };

  handlePasswordChange = (ev) => {
    const { passwordInput } = this.state;
    this.setState({ passwordInput: ev.target.value });
  };

  handleFormSubmit = () => {
    this.handleValidatingData();
  };

  handleValidatingData = () => {
    const { emailInput, passwordInput, userNameInput } = this.state;
    const { dispatch, history } = this.props;
    let emailIsValidate = validator.isEmail(emailInput);
    if (
      emailInput.length !== 0 &&
      userNameInput.length !== 0 &&
      passwordInput.length !== 0 &&
      passwordInput.length > 7 &&
      emailIsValidate
    ) {
      dispatch(
        signUpSubmit(
          {
            name: userNameInput,
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
    const { emailInput, passwordInput, userNameInput } = this.state;
    return (
      <div className="signup-wrapper">
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
          <h1 className="title">Member SignUp</h1>
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
          <div className="username-wrapper same">
            <svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
              <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0" />
              <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0" />
            </svg>
            <input
              placeholder="Username"
              value={userNameInput}
              onChange={this.handleUserNameChange}
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
            <button onClick={this.handleFormSubmit} className="btn">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null)(SignUp);
