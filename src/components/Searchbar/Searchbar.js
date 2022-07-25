import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [title, setTitle] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();
    if (title.trim() === '') {
      return toast('введите названия');
    }
    onSubmit(title.toLowerCase());
  };

  return (
    <>
      <header className="searchbar">
        <form className="form" onSubmit={onSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="on"
            autoFocus
            onMouseDown={() => setTitle('')}
            onChange={event => setTitle(event.target.value)}
            value={title}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
