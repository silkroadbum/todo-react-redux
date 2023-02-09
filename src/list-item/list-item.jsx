import { useDispatch } from 'react-redux';
import { updateItem } from '../store/list-slice/list-slice';

function ListItem({ isChecked, id, children }) {
  const dispatch = useDispatch();
  const onClickItem = (id) => {
    dispatch(updateItem(id));
  };

  return (
    <li
      className={`list-item ${isChecked ? 'list-item--checked' : ''}`}
      onClick={() => {
        onClickItem(id);
      }}>
      {children}
    </li>
  );
}

export default ListItem;
