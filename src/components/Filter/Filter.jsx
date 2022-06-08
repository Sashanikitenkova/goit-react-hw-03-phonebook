import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({filter, onChange}) => {

    return (
        <div className={s.filter}>
            <label className={s.label}>Find contacts by name
            <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onChange}
                    className={s.input}
            />
            </label>
        </div>
    )
} 

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired,
};