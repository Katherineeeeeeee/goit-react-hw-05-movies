export default function CastItem({ cast }) {
  return (
    <>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt={name}
              width={'200px'}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </>
  );
}
