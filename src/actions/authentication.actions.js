import { USER_LOGED_IN, API_FAIL, SIGN_UP } from './constants';

const URL = 'http://localhost:3000';

const log_user_in_call = (login_credential) => {
    return new Promise((res, rej) => {
    return fetch(`${URL}/login`, {
      method: "POST",
      body: JSON.stringify(login_credential),
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    }).then(function(response) {
      return res(response.json());
    }).catch(function(error) {
      console.log(error.message);
      return rej(error);
    })
  });
  
  }
  
  export const log_user_in = login_credential => (dispatch) => {
    return log_user_in_call(login_credential)
    .then(resp => dispatch({
      type: USER_LOGED_IN,
      data: resp
    }))
    .catch(resp => dispatch({
      type: API_FAIL,
      data: resp
    }))
  };

  const sign_user_up_call = (signup_credential) => {
    return new Promise((res, rej) => {
    return fetch(`${URL}/signup`, {
      method: "POST",
      body: JSON.stringify(signup_credential),
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    }).then(function(response) {
      return res(response.json());
    }).catch(function(error) {
      console.log(error.message);
      return rej(error);
    })
  });
  
  }
  
  export const sign_user_up = signup_credential => (dispatch) => {
    return sign_user_up_call(signup_credential)
    .then(resp => dispatch({
      type: SIGN_UP,
      data: resp
    }))
    .catch(resp => dispatch({
      type: API_FAIL,
      data: resp
    }))
  };