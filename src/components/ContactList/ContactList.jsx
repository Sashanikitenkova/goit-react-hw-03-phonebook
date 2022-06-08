import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import s from './ContactList.module.css'

const ContactList = ({contacts, onClick}) => {
    return (
        <ul className={s.contactList}>
            {contacts.map(({id, name, number}) => (
                <ContactItem 
                    key={id} 
                    id={id}
                    name={name}
                    number={number}
                    onClick={onClick}
                />
        ))}
     </ul>
    )
} 

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ), 
    onClick: PropTypes.func.isRequired,
};