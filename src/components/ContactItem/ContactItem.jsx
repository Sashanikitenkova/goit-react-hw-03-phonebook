import PropTypes from 'prop-types';
import s from './ContactItem.module.css'

const ContactItem = ({id, name, number, onClick}) => {
    return (
            <li className={s.contactItem} key={id}>
                {name}: {number}
                <button type='button' className={s.button} onClick={() => onClick(id)}>Delete</button>
            </li>
        )
} 

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};