import React from 'react'

const ItemPrice = props => {
  const {price} = props
  const style = {
    margin: '0px',
    fontWeight: 'normal'
  }
  return <h2 style={style}>
    {price}
  </h2>
}

export default ItemPrice
