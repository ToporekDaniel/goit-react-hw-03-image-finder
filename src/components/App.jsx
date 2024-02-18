import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imagegallery/ImageGallery';
import { Button } from './button/Button';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h2>Wyszukiwarka obrazków</h2>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Button></Button>
      </>
    );
  }
}
