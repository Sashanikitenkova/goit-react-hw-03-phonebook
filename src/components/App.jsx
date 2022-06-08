import React, {Component} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formSubmit  = ({name, number}) => {
    const { contacts } = this.state;
    const normalizedFind = name.toLowerCase();

    const findName = contacts.find(contact => 
      contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    };

    const findNumber = contacts.find(contact => 
      contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    };

    this.setState(({contacts}) => ({
      contacts: [{ id: nanoid(), name, number }, ...contacts],
    }));
  }

  filterContacts = () => {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(constant =>
      constant.name.toLowerCase().includes(normalizedFilter));
  }

  changeFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  componentDidMount() {
    const constant = localStorage.getItem('contacts');
    const parsedConstant = JSON.parse(constant);

    if(parsedConstant) {
      this.setState({contacts: parsedConstant});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render () {
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();

    return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmit}/>
          
          <h2>Contacts</h2>

          <Filter 
             filter={filter}
             onChange={this.changeFilter}
          />

          <ContactList 
             contacts={visibleContacts}
             onClick={this.deleteContact}
          />
           
        </div>
    );
  }
};
