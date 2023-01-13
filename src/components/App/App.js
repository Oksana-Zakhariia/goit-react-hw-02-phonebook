import { AppContainer } from 'components/App/App.styled';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <AppContainer>
        <Section title="Phonebook">
          <ContactForm></ContactForm>
        </Section>
        <Section title="Contacts"> </Section>
      </AppContainer>
    );
  }
}
