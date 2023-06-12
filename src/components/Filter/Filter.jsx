import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilterHandler = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilterHandler} />
    </label>
  );
};
