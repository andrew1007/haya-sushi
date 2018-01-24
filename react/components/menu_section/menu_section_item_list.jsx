import React from 'react'
import MenuSectionItem from './menu_section_item/menu_section_item'
import MenuSectionItemSublist from './menu_section_item_sublist'

const MenuSectionItemList = props => {
  let listRender = []
  const items = props.items || []
  if (items.length > 0 && items[0].subsection) {
    const itemSubsections = items.map(({subsection}) => subsection)
    const subsections = [...new Set(itemSubsections)]
    for (let section of subsections) {
      listRender.push(items.filter(({subsection}) => subsection === subsection))
    }
  } else {
    listRender.push(items)
  }
  const menuItems = listRender.map((section, id) => {
    let subSection = section[0] ? (section[0].subsection || '') : ''
    return (<div>
            {subSection}
            <MenuSectionItemSublist key={id} section={section}/>
          </div>)
  })
  return (
    <div>
      {menuItems}
    </div>
  )
}

export default MenuSectionItemList
