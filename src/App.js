import { useSelector } from 'react-redux';
import Buttons from './buttons/buttons';
import List from './list/list';
import Popup from './popup/popup';

function App() {
  const isVisiblePopup = useSelector((state) => state.list.isVisiblePopup);

  return (
    <div className="App">
      <Buttons />
      {isVisiblePopup && <Popup />}
      <List />
    </div>
  );
}

export default App;
