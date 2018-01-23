import React from 'react'
import MenuSectionItem from './menu_section_item/menu_section_item'

const MenuSectionItemList = props => {
  const items = props.items || []
  const menuItems = items.map((item) => {
    let {id, description, name, price, spiciness} = item
    let menuSectionItemProps = {id, description, name, price, spiciness}
    return <div key={id}><MenuSectionItem {...menuSectionItemProps}/></div>
  })

  return (
    <div>
      {menuItems}
    </div>
  )
}

export default MenuSectionItemList
