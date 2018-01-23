import React from 'react'

const ItemPrice = props => {
  const {price} = props
  const style = {
    margin: '0px'
  }
  return <h2 style={style}>
    {price}
  </h2>
}

export default ItemPrice
