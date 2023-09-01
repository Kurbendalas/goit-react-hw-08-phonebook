import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp } from './auth-operations';

// Ініціалізація даних користувача та токену з локального сховища
const tempUser = JSON.parse(localStorage.getItem('user')) || null;
const tempToken = localStorage.getItem('token') || null;

const initialState = {
  user: {
    name: tempUser ? tempUser.name : null,
    email: tempUser ? tempUser.email : null,
  },
  token: tempToken,
  isLoggedIn: tempUser && tempToken ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // Редуктор для реєстрації
    [signUp.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
      console.log('Signed in');
    },
    // Редуктор для входу
    [logIn.fulfilled]: (state, action) => {
      const { token, user } = action.payload;

      state.token = token;
      state.user = user;
      state.isLoggedIn = true;
      console.log('Logged in');
    },
    // Редуктор для виходу
    [logOut.fulfilled]: state => {
      console.log('Logged out');
      // Скидаємо дані користувача і токен
      state.user = {
        name: null,
        email: null, // Змінив 'gmail' на 'email' у цьому об'єкті
      };
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
