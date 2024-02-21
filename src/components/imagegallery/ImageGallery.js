import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import css from './imagegallery.module.css';

export const ImageGallery = ({ dataFromApi }) => {
  if (!dataFromApi || dataFromApi.length === 0) {
    return null; // Możesz również zwrócić komunikat o braku danych
  }
  const galleryItems = dataFromApi.map(item => (
    <ImageGalleryItem
      key={item.id}
      a={item.pageURL}
      src={item.webformatURL}
      alt={item.tags}
    />
  ));

  return <ul className={css.ImageGallery}>{galleryItems}</ul>;
};
