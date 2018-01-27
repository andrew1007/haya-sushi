import React from 'react'

const ItemPrice = props => {
  const {price} = props
  let isText = Number.isNaN(price / 10)
  const style = {
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    fontWeight: 'normal'
  }
  return <h2 className={isText ? 'menu-item-market-price' : 'menu-item-price'} style={style}>
    {price}
  </h2>
}

export default ItemPrice
