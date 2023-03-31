import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/userSlice';

export const FindFilt = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);
  return (
    <div>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={inputValue}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
};
