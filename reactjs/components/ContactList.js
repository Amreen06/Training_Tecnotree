import React from 'react';

function ItemList(props) {
  const { items } = props;

  return (
    <form>
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </form>
  );
}

export default ItemList;
