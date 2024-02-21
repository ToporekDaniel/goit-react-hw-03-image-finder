import css from './imagegalleryitem.module.css';

export const ImageGalleryItem = ({ a, src, alt, key }) => {
  return (
    <li key={key} className={css.ImageGalleryItem}>
      <a href={a}>
        <img className={css.ImageGalleryItemImage} src={src} alt={alt} />
      </a>
    </li>
  );
};
