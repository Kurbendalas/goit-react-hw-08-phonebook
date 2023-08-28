import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';

import css from "./Contact.module.css";

export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
      <div>
            <p>{contact.name}: {contact.phone}</p>
        <button type="button" onClick={handleDelete} id={contact.id} className={css.delete}>Delete</button>
      </div>
  )

}