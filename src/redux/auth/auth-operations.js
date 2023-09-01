export const signUp = createAsyncThunk('user/signup', async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      console.log(data);
      toast.success('Signed up');
      return data;
    } catch (e) {
      const errorMessage = e.message || 'Something went wrong';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ message: errorMessage, status: e.response?.status });
    }
  });
  
  export const logIn = createAsyncThunk('user/login', async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      toast.success('Logged In');
      return data;
    } catch (e) {
      const errorMessage = e.message || 'Something went wrong';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ message: errorMessage, status: e.response?.status });
    }
  });
  
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
  
      toast.success('Logged out');
  
      return data;
    } catch (e) {
      const errorMessage = e.message || 'Something went wrong';
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ message: errorMessage, status: e.response?.status });
    }
  });
  