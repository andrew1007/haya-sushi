import React from 'react'
import ItemName from './menu_item_name'
import ItemDescription from './menu_item_description'
import ItemPrice from './menu_item_price'

const MenuItem = props => {
  const {id, description, name, price, spiciness} = props
  const itemNameProps = {name}
  const itemDescriptionProps = {description}
  const itemPriceProps = {price}
  const itemNameStyle = {
    float: 'left',
  }
  const containerStyle = {
    display: 'flex',
    marginBottom: '10px',
    justifyContent: 'space-between'
  }
  return (
    <div style={containerStyle} key={props.id}>
      <div style={itemNameStyle}>
        <ItemName {...itemNameProps}/>
        <ItemDescription {...itemDescriptionProps}/>
      </div>
      <ItemPrice {...itemPriceProps}/>
    </div>
  )
}
export default MenuItem
