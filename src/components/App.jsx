import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imagegallery/ImageGallery';
import { Button } from './button/Button';
import { getImages } from './axios/axiosGet';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchV: '',
      page: 1,
      images: [],
    };
  }

  handleSearchSubmit = async searchValue => {
    try {
      const images = await getImages(searchValue, 1);

      this.setState({ searchV: searchValue, page: 1, images });
      console.log(images);
    } catch (error) {
      console.error('Error in handleSearchSubmit:', error);
    }
  };

  handleLoadMore = async () => {
    // Nie kumam ale sam setState z prev daje dłąd za pierwszym wczytaniem
    const nextPage = this.state.page + 1;

    this.setState({ page: nextPage });

    try {
      const images = await getImages(this.state.searchV, nextPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
      console.log(images);
    } catch (error) {
      console.error('Error in handleLoadMore:', error);
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}></Searchbar>
        <ImageGallery dataFromApi={this.state.images}></ImageGallery>
        <Button onLoadMore={this.handleLoadMore}></Button>
      </>
    );
  }
}
