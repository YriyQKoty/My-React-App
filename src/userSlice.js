import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchUsers() {
  try {
    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
    yield put(fetchUserDataSuccess(response.data));
    console.log("saga response")
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchUserData() {
  yield takeLatest('users/fetchUsers', fetchUsers);
}

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// });


const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducers: {
    fetchUserDataSuccess: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { fetchUserDataSuccess } = userSlice.actions;

export default userSlice.reducer;