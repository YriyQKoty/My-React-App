import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { fetchUsers } from '../actions/actions';

const initialState = {
    loading: false,
    users: [],
    error: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_REQUEST":
        console.log("Requesting...")
        return {
          ...state,
          loading: true,
        };
      case "FETCH_USERS_SUCCESS":
        console.log(action.payload)
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
      case "FETCH_USERS_FAILURE":
          console.log("Failure")
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };

  //const store = configureStore({reducer: userReducer}, applyMiddleware(thunk))

  //store.dispatch(fetchUsers());
  
  export default userReducer;