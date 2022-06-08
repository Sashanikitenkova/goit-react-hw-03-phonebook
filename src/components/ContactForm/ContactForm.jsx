import React, {Component} from "react";
import { nanoid } from "nanoid";
import s from './ContactForm.module.css'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }
  
    render() {
      const { name, number } = this.state;

      return (
        <form onSubmit={this.handleSubmit} className={s.form}>
            <label htmlFor={this.nameInputId} className={s.label}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                id = {this.nameInputId}
                onChange={this.handleChange}
                className={s.input}
            />

            <label htmlFor={this.numberInputId} className={s.label}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                id = {this.numberInputId}
                onChange={this.handleChange}
                className={s.input}
            />
            <button type="submit" className={s.button}>Add contact</button>
       </form>
      );
    }
  }

