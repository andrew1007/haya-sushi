import React from 'react'

const ItemName = props => {
  const style = {margin: '5px'}
  return <h3 className='menu-item-name' style={style}>
    {props.name}
  </h3>
}

export default ItemName
