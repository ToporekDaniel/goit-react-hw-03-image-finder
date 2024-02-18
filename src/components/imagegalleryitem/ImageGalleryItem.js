import css from './imagegalleryitem.module.css';

export const ImageGalleryItem = () => {
  return (
    <a href="." className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src="https://placehold.co/400"
        alt="Placeholder"
      />
    </a>
  );
};
