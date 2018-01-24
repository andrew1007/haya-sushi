import React from 'react'
import MenuSectionItem from './menu_section_item/menu_section_item'

const MenuSectionItemSublist = props => {
  const itemSubList = props.section.map((item) => {
    let {id, description, name, price, spiciness} = item
    let menuSectionItemProps = {id, description, name, price, spiciness}
    menuSectionItemProps.subSection = item.subSection || ''
    return <MenuSectionItem key={id} {...menuSectionItemProps}/>
  })
  return (
    <div>
      {itemSubList}
    </div>
  )
}

export default MenuSectionItemSublist
