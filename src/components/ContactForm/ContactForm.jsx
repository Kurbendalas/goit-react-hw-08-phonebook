import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/operations';
import { selectContacts } from "redux/selectors";
import { nanoid } from "@reduxjs/toolkit";

import css from "./ContactForm.module.css";



export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const checkName = (name) => {
    if (contacts.find(contact => contact.name === name
    )) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value
    const phone = event.currentTarget.elements.number.value
    const id = nanoid()
    const createdAt = new Date()

    const newContact = {
      createdAt,
      name,
      phone,
      id,
    }
    if (checkName(name)){
      dispatch(addContact(newContact))
      }
      event.currentTarget.reset()

  }

    return (
      <form className= {css.form} action="add contact" onSubmit={onFormSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </label>
        <button type="submit" className= {css.btn}>Add contact</button>
    </form>
  )
}