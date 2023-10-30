/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
// URL BACKEND
const BASE_URL = "http://localhost:8000/api/v1";

// Get a current username
const currentUser = (state) => state.persistedReducer.auth.username;
// Get a role user
const currentRole = (state) => state.persistedReducer.auth.role;

// Function to get the access token in local storage
///const getAccessToken = () => localStorage.getItem("accessToken");
const currentAccessToken = (state) => state.persistedReducer.auth.accessToken;
// Function to get the refresh token in local storage
///const getRefreshToken = () => localStorage.getItem("refreshToken");
const currentRefreshToken = (state) => state.persistedReducer.auth.refreshToken;

// Function to clean the access and refresh token in local storage
const clearStorage = () => {
  localStorage.removeItem("persist:root");
  ///localStorage.removeItem("accessToken");
  ///localStorage.removeItem("refreshToken");
};

// Function to refresh a new access token
const reauthenticate = async (refreshToken) => {
  // Use parse to remove a quotation marks
  const token = JSON.parse(refreshToken);

  let options = {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ///'Authorization': `Bearer ${JSON.stringify({ refreshToken: token })}`,
    },
    body: JSON.stringify({ refreshToken: token }) //JSON.stringify({ refreshToken: getRefreshToken() })
  }

  try {
    const response = await fetch(`${BASE_URL}/auth/refresh`, options);

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error (Refresh token failed): The status is ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Something wrong: refresh token failed');
  }
}

// Function to set the access and refresh token in local storage
/*const setToken = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};*/

export {
  BASE_URL, clearStorage, currentUser, currentRole,
  currentAccessToken, currentRefreshToken, reauthenticate
};
