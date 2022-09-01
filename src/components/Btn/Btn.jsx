import { useNavigate } from 'react-router-dom';

export default function Btn({ text }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return <button onClick={goBack}>{text}</button>;
}
