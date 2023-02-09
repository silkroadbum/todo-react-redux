import React from 'react';
import { useDispatch } from 'react-redux';
import { showPopup } from '../store/list-slice/list-slice';

function Buttons() {
  const dispatch = useDispatch();

  const onClickAddItem = () => {
    dispatch(showPopup(true));
  };

  return (
    <div className="container">
      <button className="button" onClick={onClickAddItem}>
        Добавить
      </button>
      <button className="button">Удалить</button>
      <button className="button">Тест GraphQL</button>
    </div>
  );
}

export default Buttons;
