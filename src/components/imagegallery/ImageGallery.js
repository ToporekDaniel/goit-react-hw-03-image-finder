import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import css from './imagegallery.module.css';

export const ImageGallery = ({ dataFromApi }) => {
  if (!dataFromApi || dataFromApi.length === 0) {
    return null;
  }
  const galleryItems = dataFromApi.map(item => (
    <ImageGalleryItem key={item.id} src={item.webformatURL} alt={item.tags} />
  ));

  return <ul className={css.ImageGallery}>{galleryItems}</ul>;
};
