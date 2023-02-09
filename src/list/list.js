import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../list-item/list-item';

function List() {
  const items = useSelector((state) => state.list.items);

  return (
    <ul className="list">
      {items.map((item, i) => (
        <ListItem key={item + i} isChecked={item.isChecked} id={i}>
          {item.value}
        </ListItem>
      ))}
    </ul>
  );
}

export default List;
