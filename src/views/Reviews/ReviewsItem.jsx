export default function ReviewsItem({ reviews }) {
  return (
    <ul>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
