import React from 'react';
import { useDispatch } from 'react-redux';
import { showPopup, filterList } from '../store/list-slice/list-slice';

function Buttons() {
  const dispatch = useDispatch();

  const onClickAddItem = () => {
    dispatch(showPopup(true));
  };

  const onClickClear = () => {
    const clearingList = window.confirm('Вы действительно хотите удалить выполненые задачи?');
    if (clearingList) {
      dispatch(filterList());
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={onClickAddItem}>
        Добавить
      </button>
      <button className="button" onClick={onClickClear}>
        Удалить
      </button>
      <button className="button">Тест GraphQL</button>
    </div>
  );
}

export default Buttons;
