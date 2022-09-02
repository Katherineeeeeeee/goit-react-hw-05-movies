import PropTypes from 'prop-types';

import s from '../List/List.module.css';

export default function CastItem({ cast }) {
  const url =
    'https://ru.freepik.com/free-vector/glitch-error-404-page_4121419.htm';

  return (
    <ul className={s.list}>
      {cast &&
        cast.map(({ id, name, profile_path = url, character }) => (
          <li key={id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
              width={'400px'}
            />
            <h3 className={s.name}>{name}</h3>
            <p className={s.desc}>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

CastItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
};
