import { Contact } from 'components/Contact/Contact';
export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        console.log(item.name);
        return (
          <li key={item.id}>
            <Contact item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
