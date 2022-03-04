import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginInfos = [
  {
    email: "test123@mail.com",
    password: "test1234",
    firstName: "test1",
    lastName: "test2",
    middleName: "",
    dateOfBirth: "03/08/2002",
    phoneNumber: "09123456789",
    address: "test Address",
    city: "test City",
  },
];

const initialState = {
  loginInfos: loginInfos,
  loggedUser: {},
  isLoading: false,
  isAuth: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, ...rest }) => {
    if (email && password) {
      return {
        email,
        password,
        ...rest,
      };
    }
    return false;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const loginPayload = action.payload;
      const isValidLogin = state.loginInfos.find(
        (login) =>
          login.userName === loginPayload.userName &&
          login.password === loginPayload.password
      );

      if (isValidLogin) {
        state.isAuth = true;
        state.loggedUser = isValidLogin;
      } else {
        state.isAuth = false;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.loggedUser = {};
    },
  },
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loginInfos = action.payload;
      state.isLoading = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
export const authSelect = (state) => state.auth;
