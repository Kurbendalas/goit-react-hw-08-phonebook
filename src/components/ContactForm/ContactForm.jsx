import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectAuth } from 'redux/auth/auth-selector';
import { TextField, Box, Button } from '@mui/material';

function ContactForm() {
  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);

  const formHandler = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const number = form.number.value.trim();

    dispatch(
      addContact({
        name,
        number,
        token,
      })
    );
    form.reset();
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <Box
        className="global-form"
        component="form"
        onSubmit={formHandler}
      >
        <TextField label="Name" variant="outlined" name="name" required />
        <TextField
          label="Number"
          variant="outlined"
          name="number"
          type="number"
          required
        />
        <Button variant="contained" type="submit">
          Add Contact
        </Button>
      </Box>
    </div>
  );
}

export default ContactForm;
