import React from 'react'
import Lineitem from './Lineitem'


export const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
          <Lineitem
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />

        ))}
      </ul>
  )
}

export default ItemsList