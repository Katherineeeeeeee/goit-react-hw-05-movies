export default function Searchbar({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <button type="submit">🔍</button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
      </label>
    </form>
  );
}
