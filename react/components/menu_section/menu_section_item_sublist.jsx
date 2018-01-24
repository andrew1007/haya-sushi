import React from 'react'
import MenuSectionItem from './menu_section_item/menu_section_item'

const MenuSectionItemSublist = props => {
  const itemSubList = props.section.map((item, idx) => {
    let {id, description, name, price, spiciness} = item
    let menuSectionItemProps = {id, description, name, price, spiciness}
    menuSectionItemProps.subSection = item.subSection || ''
    return <MenuSectionItem key={idx} {...menuSectionItemProps}/>
  })
  let style
  if (props.subSection !== '') {
    style = {
      marginLeft: '10px'
    }
  } else {
    style = {}
  }
  return (
    <div style={style}>
      {itemSubList}
    </div>
  )
}

export default MenuSectionItemSublist
