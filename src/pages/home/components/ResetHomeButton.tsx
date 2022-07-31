import { resetUser } from '@/redux/slices/user.slice';
import { useDispatch } from 'react-redux';

export default function ResetHomeButton() {
  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(resetUser());
  };

  return <button onClick={dispatchAction}>Dispatch reset action</button>;
}
