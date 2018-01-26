import React from 'react'

const ItemPrice = props => {
  const {price} = props
  const style = {
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    fontWeight: 'normal'
  }
  if (Number.isNaN(price / 10)) {
    style['fontSize'] = '20px'
  }
  return <h2 style={style}>
    {price}
  </h2>
}

export default ItemPrice
