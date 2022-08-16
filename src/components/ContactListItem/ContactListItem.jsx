import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item} key={id}>
      {name}: {number}
      <button className={css.button} type="button" onClick={deleteContact}>
        Delete contact
      </button>
    </li>
  );
};
