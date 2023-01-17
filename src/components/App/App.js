import { AppContainer } from 'components/App/App.styled';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  static propTypes = {};
  addContact = values => {
    this.state.contacts.map(contact => {
      if (contact.name === values.name) {
        alert(`${contact.name} is already in contacts`);
      }
      return {};
    });
    this.setState(prevState => ({ contacts: [...prevState.contacts, values] }));
  };
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };
  searchContact = event => {
    const inputValue = event.currentTarget.value;
    this.setState({ filter: inputValue });
  };
  render() {
    const normalizedFilterValue = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilterValue);
    });
    console.log(normalizedFilterValue);
    return (
      <AppContainer>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          <SearchBox
            onChange={this.searchContact}
            value={this.state.filter}
          ></SearchBox>
          <ContactList
            items={filtredContacts}
            onDelete={this.deleteContact}
          ></ContactList>{' '}
        </Section>
      </AppContainer>
    );
  }
}
