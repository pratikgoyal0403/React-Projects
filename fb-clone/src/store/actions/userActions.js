import * as actionTypes from "./actiontypes";

export const setUser = (userInfo) => {
  return {
    type: actionTypes.SET_USER,
    userInfo,
  };
};

export const getTokenAndSet = (token) => {
  return (dispatch) => {
    fetch("http://localhost:5050/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((result) => {
        if (result.status === 500) {
          return alert("token expired");
        } else {
          return result.json();
        }
      })
      .then((user) => {
        dispatch(setUser(user.user));
      })
      .catch((err) => console.log(err));
  };
};

export const login = (user) => {
  return {
    type: actionTypes.LOGIN,
    user,
  };
};

export const fetchUser = (formData, history) => {
  return (dispatch) => {
    fetch("http://localhost:5050/login", {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((user) => {
        dispatch(login(user.user));
        localStorage.setItem("id", user.token);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
};

export const signup = () => {
  return {
    type: actionTypes.SIGNUP,
  };
};

export const register = (formData, history) => {
  return (dispatch) => {
    fetch("http://localhost:5050/signup", {
      method: "POST",
      body: formData,
    })
      .then((result) => result.json())
      .then((user) => {
        dispatch(signup());
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };
};

export const updateProfile = (updatedUser) => {
  return {
    type: actionTypes.UPDATE_USER_PROFILE,
    updatedUser,
  };
};

export const postUserUpdate = (formData) => {
  return (dispatch) => {
    fetch("http://localhost:5050/user", {
      method: "PUT",
      body: formData,
    })
      .then((result) => result.json())
      .then((user) => {
        console.log(user.user);
        dispatch(updateProfile(user.user));
      })
      .catch((err) => console.log(err));
  };
};
