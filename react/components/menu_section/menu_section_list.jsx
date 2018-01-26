import React from 'react'
import MenuSection from './menu_section'
import SectionOptionList from '../section_options/section_option_list'
// import MenuSectionItem from './menu_section_item/menu_section_item'
// import MenuSectionItemSublist from './menu_section_item_sublist'
// import SubListHeader from './menu_section_sublist_header'
// import MenuSubsection from './menu_subsection'
// import SectionOption from './menu_section_menu_option'
require('../helpers/helpers')

const MenuSectionList = props => {
  const partitioned = props.menuItems.partitionObjectsByKey('subsection')
  const sectionOption = props.option[props.currentSection] || {details: [], title: null}
  let hasHeader = partitioned.length > 1
  const menuItems = partitioned.map((section, id) => {
    let subSection = section[0].subsection
    let option = props.option[subSection] || {details: [], title: null}
    let subsectionProps = {section, subSection, id, hasHeader, option}
    return <div key={id}>
      <MenuSection {...subsectionProps}/>
    </div>
  })

  const style = {
    width: '100%',
    marginTop: '10px',
    maxWidth: '550px'
  }
  return (
    <div style={style}>
      {menuItems}
      {sectionOption.details.length > 0 || sectionOption.title ? <SectionOptionList option={sectionOption}/> : null}
    </div>
  )
}

export default MenuSectionList
