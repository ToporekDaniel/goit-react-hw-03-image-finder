import { Component } from 'react';
import { ContactList } from './list/list';
import { Filter } from './filter/filter';
import { ContactForm } from './form/form';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h2>Wyszukiwarka obrazków</h2>
      </>
    );
  }
}
