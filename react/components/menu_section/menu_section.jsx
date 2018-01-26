import React, {Component} from 'react'
import MenuItem from '../menu_item/menu_item'
import MenuSectionHeader from './menu_section_header'
import SectionOptionList from '../section_options/section_option_list'

export default class MenuSection extends Component {
  constructor() {
    super()
    this.state = { hidden: true }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.section[0].id !== this.props.section[0].id) {
      this.setState({hidden: nextProps.hasSubsection })
    }
  }

  toggleHidden = () => {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    const {section, currentSection, subSection, option, hasSubsection} = this.props
    const itemSublistProps = {section, subSection}
    const toggleHidden = hasSubsection ? this.toggleHidden : null
    const header = hasSubsection ? subSection : currentSection
    const headerProps = {header, toggleHidden, hasSubsection }
    const optionProps = {option}
    const listStyle = this.state.hidden ? {height: '0px', overflow: 'hidden'} : {}
    const menuItems = section.map((item, idx) => {
      let {id, description, name, price, spiciness} = item
      let menuItemProps = {id, description, name, price, spiciness}
      return <MenuItem key={idx} {...menuItemProps} />
    })
    console.log(section);
    return (
      <div>
        <MenuSectionHeader {...headerProps}/>
        <div style={listStyle}>
          {menuItems}
          <SectionOptionList {...optionProps}/>
        </div>
      </div>
    )
  }
}
