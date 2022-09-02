import s from '../List/List.module.css';
export default function CastItem({ cast }) {
  return (
    <ul className={s.list}>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
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
