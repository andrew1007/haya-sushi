import React from 'react'
import ItemName from './menu_section_item_name'
import ItemDescription from './menu_section_item_description'
import ItemPrice from './menu_section_item_price'

const MenuSectionItem = props => {
  const {id, description, name, price, spiciness} = props
  const itemNameProps = {name}
  const itemDescriptionProps = {description}
  const itemPriceProps = {price}
  const itemNameStyle = {
    float: 'left',
    width: '350px'
  }
  const containerStyle= {
    display: 'flex',
    flexGrow: 1,
    marginBottom: '10px'
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
export default MenuSectionItem
