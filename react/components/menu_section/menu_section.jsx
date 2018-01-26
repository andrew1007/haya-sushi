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
      this.setState({hidden: nextProps.hasHeader })
    }
  }

  toggleHidden = () => {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    const {section, subSection, option, hasHeader} = this.props
    const itemSublistProps = {section, subSection}
    const headerProps = {subSection, hasHeader, toggleHidden: this.toggleHidden}
    const optionProps = {option}
    const listStyle = this.state.hidden ? {height: '0px', overflow: 'hidden'} : {}
    const menuItems = section.map((item, idx) => {
      let {id, description, name, price, spiciness} = item
      let menuItemProps = {id, description, name, price, spiciness}
      return <MenuItem key={idx} {...menuItemProps} />
    })
    return (
      <div>
        {this.props.hasHeader ? <MenuSectionHeader {...headerProps}/> : null}
        <div style={listStyle}>
          {menuItems}
          <SectionOptionList {...optionProps}/>
        </div>
      </div>
    )
  }
}
