import css from './searchbar.module.css';

export const Searchbar = () => {
  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button className={css.SearchFormButton}></button>
        <input className={css.SearchFormInput}></input>
      </form>
    </div>
  );
};
