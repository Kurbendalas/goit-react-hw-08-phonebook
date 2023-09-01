export const deleteContact = createAsyncThunk(
    'contacts/removeContact',
    async ({ id, token }, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Deleted');
        return response.data.id;
      } catch (e) {
        thunkAPI.rejectWithValue(e.message);
        toast.error('Something went wrong');
      }
    }
  );

  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number, token }, thunkAPI) => {
      try {
        const newContact = {
          name,
          number,
        };
  
        const { data } = await axios.get('/contacts', {
          headers: {
            Authorization: token,
          },
        });
  
        if (!data.filter(({ name }) => name === newContact.name).length) {
          const { data } = await axios.post(`/contacts`, newContact, {
            headers: {
              Authorization: token,
            },
          });
          toast.success('Added');
  
          return data;
        }
  
        toast.info('Such contact already exists');
        return null;
      } catch (e) {
        thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteAllContacts = createAsyncThunk(
    'contacts/deleteAllContacts',
    async ({ contacts, token }, thunkAPI) => {
      try {
        for (const contact of contacts) {
          const { id } = contact;
  
          toast.promise(
            axios.delete(`/contacts/${id}`, {
              headers: {
                Authorization: token,
              },
            }),
            {
              pending: 'Deleting in progress',
              success: 'Deleting is done',
              error: 'Deleting rejected',
            }
          );
        }
      } catch (e) {
        thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  