import css from './button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <button className={css.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
};
