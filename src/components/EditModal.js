import "../../public/styles/components/editmodal.scss";
import { deleteSubmit } from "../actions/FormActions";
import { updateSubmit } from "../actions/FormActions";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";
import validator from "validator";
import { compose } from "redux";

class EditModal extends Component {
  state = {
    emailInput: this.props.currentEmail,
    userNameInput: this.props.currentName,
  };

  handleEmailChange = (ev) => {
    const { emailInput } = this.state;
    this.setState({ emailInput: ev.target.value });
  };

  handleUserNameChange = (ev) => {
    const { userNameInput } = this.state;
    this.setState({ userNameInput: ev.target.value });
  };

  handleUpdateAccount = () => {
    this.handleValidatingData();
  };

  handleValidatingData = () => {
    const { emailInput, userNameInput } = this.state;
    const { dispatch, history, currentToken } = this.props;
    let emailIsValidate = validator.isEmail(emailInput);
    if (
      emailInput.length !== 0 &&
      userNameInput.length !== 0 &&
      emailIsValidate
    ) {
      dispatch(
        updateSubmit(
          {
            name: userNameInput,
            email: emailInput,
          },
          currentToken
        )
      );
      setTimeout(() => {
        this.setState({
          emailInput: "",
          userNameInput: "",
        });
      }, 3000);
    } else {
      cogoToast.warn(
        "Your inputs should not be empty , your password must be over 7 characters and your email must be valid!"
      );
    }
  };

  handleDeleteAccount = () => {
    const { history, dispatch, currentToken } = this.props;
    dispatch(deleteSubmit(currentToken, history));
  };
  render() {
    const { modalShow } = this.props;
    const { emailInput, userNameInput } = this.state;
    return (
      <div className="overlay">
        <div className="wrapper">
          <span className="close-icon" onClick={modalShow}></span>
          <div className="input-wrappers">
            <div className="email-wrapper same modal">
              <input
                placeholder="Email"
                value={emailInput}
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="username-wrapper same modal">
              <input
                placeholder="Username"
                value={userNameInput}
                onChange={this.handleUserNameChange}
              />
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="btn" onClick={this.handleUpdateAccount}>
              Update your informations
            </button>
            <button className="btn delete" onClick={this.handleDeleteAccount}>
              Delete your account
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentToken: state.FormReducers.currentToken,
  currentName: state.FormReducers.currentName,
  currentEmail: state.FormReducers.currentEmail,
});

export default compose(withRouter, connect(mapStateToProps))(EditModal);
