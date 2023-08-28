import { Contact } from "../Contact/Contact"
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import css  from "./ContactList.module.css";

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts)

  return (
    <ul className= {css.contactNameList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactName}>
          <Contact
              contact={contact} />
            </li>
        )
      })}
    </ul>
)
}