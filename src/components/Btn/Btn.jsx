import { useNavigate } from 'react-router-dom';
import s from './Btn.module.css';

export default function Btn({ text }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <button className={s.btn} onClick={goBack}>
      <span>{text}</span>
    </button>
  );
}
