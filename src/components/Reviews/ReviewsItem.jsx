import s from './ReviewsItem.module.css';

export default function ReviewsItem({ reviews }) {
  return (
    <ul className={s.list}>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <li key={id} className={s.item}>
            <p className={s.author}>{author}</p>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}

// reviews.length > 0
// (return ('Sorry, we do not have any reviews about this movie'));
