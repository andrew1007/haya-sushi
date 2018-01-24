import React from 'react'
import MenuSectionItem from './menu_section_item/menu_section_item'
import MenuSectionItemSublist from './menu_section_item_sublist'
import SubListHeader from './menu_section_sublist_header'
import MenuSubsection from './menu_subsection'

const MenuSection = props => {
  let listRender = []
  const items = props.menuItems || [{}]
  if (items.length > 0 && items[0].subsection) {
    const itemSubsections = items.map(({subsection}) => subsection)
    const subsections = [...new Set(itemSubsections)]
    for (let section of subsections) {
      listRender.push(items.filter(({subsection}) => subsection === section))
    }
  } else {
    listRender.push(items)
  }
  const menuItems = listRender.map((section, id) => {
    let subSection
    if (section[0] && section[0].subsection) {
      subSection = section[0].subsection
    } else {
      subSection = ''
    }
    let subsectionProps = {section, subSection, id}
    return <MenuSubsection key={id} {...subsectionProps}/>
  })
  const style = {
    width: '100%',
    marginTop: '10px',
    maxWidth: '550px'
  }
  return (
    <div style={style}>
      {menuItems}
    </div>
  )
}

export default MenuSection
