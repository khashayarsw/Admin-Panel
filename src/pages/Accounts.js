import AccountCharacters from "../components/AccountCharacters";
import gearIcon from "../../public/img/svg/gear-animate.svg";
import { signOutSubmit } from "../actions/FormActions";
import React, { Component, Fragment } from "react";
import "../../public/styles/pages/accounts.scss";
import EditModal from "../components/EditModal";
import { connect } from "react-redux";

class Accounts extends Component {
  state = {
    editMode: false,
  };

  handleAccountsShow = (val) => {
    const { currentEmail } = this.props;
    let editMode = false;
    if (currentEmail === val.email) {
      editMode = true;
    }
    return (
      <AccountCharacters
        name={val.name}
        email={val.email}
        key={val._id}
        modalShow={this.handleEditModalShow}
        haveEdit={editMode}
      />
    );
  };

  handleSignOut = () => {
    const { dispatch, history, currentToken } = this.props;
    dispatch(signOutSubmit(currentToken, history));
  };

  handleEditModalShow = () => {
    const { editModalShow } = this.state;
    if (editModalShow) {
      return this.setState({
        editModalShow: false,
      });
    }
    this.setState({
      editModalShow: true,
    });
  };

  render() {
    const { Members } = this.props;
    const { editModalShow } = this.state;
    return (
      <Fragment>
        <div className="accounts-wrapper">
          <ul className="accounts-list-wrapper">
            {Members.length > 0 ? (
              Members.map(this.handleAccountsShow)
            ) : (
              <img src={gearIcon} alt="" />
            )}
          </ul>
        </div>
        <button onClick={this.handleSignOut} className="signout-btn">
          SignOut
        </button>
        {editModalShow && <EditModal modalShow={this.handleEditModalShow} />}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  Members: state.FormReducers.Members,
  currentToken: state.FormReducers.currentToken,
  currentEmail: state.FormReducers.currentEmail,
});

export default connect(mapStateToProps)(Accounts);
