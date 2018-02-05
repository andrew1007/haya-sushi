import React, {Component} from 'react'
import MenuItem from '../menu_item/menu_item'
import MenuSectionHeader from './menu_section_header'
import SectionOptionList from '../section_options/section_option_list'
import { connect } from 'react-redux'

class MenuSectionPresentational extends Component {
  constructor() {
    super()
    this.state = { hidden: true }
  }

  componentWillMount() {
    if (!this.props.hasSubsection) {
      this.setState({hidden: false})
    }
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
    const cart = this.props.cart || {}
    const itemSublistProps = {section, subSection}
    const toggleHidden = hasSubsection ? this.toggleHidden : null
    const header = hasSubsection ? subSection : currentSection
    const headerProps = {header, toggleHidden, hasSubsection }
    const optionProps = {option}
    const listStyle = this.state.hidden ? {height: '0px', overflow: 'hidden'} : {}
    const menuItems = section.map((item, idx) => {
      let {id, description, name, price, spiciness} = item
      let menuItemProps = {id, description, name, price, spiciness, saved: !!cart[id]}
      return <MenuItem key={idx} {...menuItemProps} />
    })
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

const mapStateToProps = ({cart}) => {
  return {cart}
}

const MenuSection = connect(
  null, mapStateToProps
)(MenuSectionPresentational)

export default MenuSection
