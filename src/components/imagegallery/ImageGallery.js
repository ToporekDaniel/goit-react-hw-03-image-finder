import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import css from './imagegallery.module.css';

export const ImageGallery = () => {
  const galleryItems = [];

  for (let i = 0; i < 10; i++) {
    galleryItems.push(<ImageGalleryItem key={i} />);
  }

  return <div className={css.ImageGallery}>{galleryItems}</div>;
};
