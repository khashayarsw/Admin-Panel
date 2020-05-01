import * as Constants from "../constants/ActionTypes";
import * as API from "../constants/API";
import cogoToast from "cogo-toast";
import axios from "axios";

const FetchAccounts = (action) => ({
  type: Constants.FORM_GET_ACCOUNTS,
  ...action,
});

export const getUserToken = (action) => ({
  type: Constants.GET_USER_TOKEN,
  ...action,
});

export const getUserEmail = (action) => ({
  type: Constants.GET_USER_EMAIL,
  ...action,
});

export const getUserName = (action) => ({
  type: Constants.GET_USER_NAME,
  ...action,
});

export const getAccounts = (token) => (dispatch) => {
  let headerValue = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios
    .get(API.SIGN_API, headerValue)
    .then(({ data }) => {
      dispatch(FetchAccounts({ Members: data }));
    })
    .catch((error) => {
      console.log("something go wrong!");
    });
};

export const signUpSubmit = (data, history) => (dispatch) => {
  return axios
    .post(API.SIGN_API, data)
    .then(({ data }) => {
      cogoToast.success("Your are login!");
      dispatch(getAccounts(data.token));
      dispatch(getUserToken({ currentToken: data.token }));
      dispatch(getUserEmail({ currentEmail: data.user.email }));
      dispatch(getUserName({ currentName: data.user.name }));
      history.push("/accounts");
    })
    .catch((error) => {
      cogoToast.error("something go wrong!");
    });
};

export const deleteSubmit = (token, history) => (dispatch) => {
  let headerValue = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios
    .delete(API.DELETE_API, headerValue)
    .then(() => {
      cogoToast.success("Your accuond is deleted!");
      history.push("/");
    })
    .catch((error) => {
      cogoToast.error("something go wrong!");
    });
};

export const updateSubmit = (data, token) => (dispatch) => {
  let headerValue = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios
    .patch(API.UPDATE_API, data, headerValue)
    .then(() => {
      cogoToast.success("Your accuond is updated!");
      dispatch(getAccounts(token));
    })
    .catch((error) => {
      cogoToast.error("something go wrong!");
    });
};

export const loginSubmit = (data, history) => (dispatch) => {
  return axios
    .post(API.LOGIN_API, data)
    .then(({ data }) => {
      cogoToast.success("Your are login!");
      dispatch(getAccounts(data.token));
      dispatch(getUserToken({ currentToken: data.token }));
      dispatch(getUserEmail({ currentEmail: data.user.email }));
      dispatch(getUserName({ currentName: data.user.name }));
      history.push("/accounts");
    })
    .catch((error) => {
      cogoToast.error("something go wrong!");
    });
};

export const signOutSubmit = (token, history) => (dispatch) => {
  let headerValue = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return axios
    .post(API.SIGNOUT_API, null, headerValue)
    .then(() => {
      cogoToast.success("Your are logout!");
      dispatch(getUserToken({ currentToken: "" }));
      dispatch(getUserEmail({ currentEmail: "" }));
      dispatch(getUserName({ currentName: "" }));
      dispatch(FetchAccounts({ Members: [] }));
      history.push("/");
    })
    .catch((error) => {
      cogoToast.error("something go wrong!");
    });
};
