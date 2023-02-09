import { useRef } from 'react';
import { showPopup, addItem } from '../store/list-slice/list-slice';
import { useDispatch } from 'react-redux';

function Popup() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onClickCancel = () => {
    dispatch(showPopup(false));
  };

  const onClickOk = () => {
    if (inputRef.current.value) {
      dispatch(addItem({ value: inputRef.current.value, isChecked: false }));
      inputRef.current.value = '';
      dispatch(showPopup(false));
    }
  };

  return (
    <div className="popup">
      <input className="popup__input" ref={inputRef} type="text" required />
      <div className="popup__block">
        <button className="button" onClick={onClickOk}>
          ОК
        </button>
        <button className="button" onClick={onClickCancel}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default Popup;
