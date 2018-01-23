import React from 'react'

const ItemName = props => {
  const style = {margin: '5px'}
  return <h3 style={style}>
    {props.name}
  </h3>
}

export default ItemName
