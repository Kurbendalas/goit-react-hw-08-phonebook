import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { alertObj } from 'js/alert-obj';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Операція реєстрації
export const signUp = createAsyncThunk('user/signup', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', user);
    console.log(data);
    toast.success('Signed up', alertObj);
    return data;
  } catch (e) {
    const errorMessage = e.message || 'Something went wrong';
    toast.error(errorMessage, alertObj);
    return thunkAPI.rejectWithValue({ message: errorMessage, status: e.response?.status });
  }
});

// Операція входу
export const logIn = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    toast.success('Logged In', alertObj);
    return data;
  } catch (e) {
    const errorMessage = e.message || 'Something went wrong';
    toast.error(errorMessage, alertObj);
    return thunkAPI.rejectWithValue({ message: errorMessage, status: e.response?.status });
  }
});

// Операція виходу
export const logOut = createAsyncThunk('user/logout', async (token, thunkAPI) => {
  try {
    const { data } = await axios.post(
      '/users/logout',
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    toast.success('Logged out', alertObj);

    return data;
  } catch (e) {
    const errorMessage = e.message || 'Something went wrong';
    toast.error(errorMessage, alertObj);
    return thunkAPI.rejectWithValue({ message: errorMessage, status: e.response?.status });
  }
});
