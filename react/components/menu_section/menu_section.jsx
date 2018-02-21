import React, {Component} from 'react'
import MenuItem from '../menu_item/menu_item'
import MenuSectionHeader from './menu_section_header'
import SectionOptionList from '../section_options/section_option_list'
import { connect } from 'react-redux'

export default class MenuSection extends Component {
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
    if (nextProps.section.length > 0 && nextProps.section[0].id !== this.props.section[0].id) {
      this.setState({hidden: nextProps.hasSubsection })
    }
  }

  toggleHidden = () => {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    const {currentSection, subSection, option, hasSubsection } = this.props
    const headerOptions = this.props.headerOptions || null
    const section = this.props.section || []
    const cart = this.props.cart || []
    const cartIds = new Set(cart.map((entry) => entry.id))
    const itemSublistProps = {section, subSection}
    const toggleHidden = hasSubsection ? this.toggleHidden : null
    const header = hasSubsection ? subSection : currentSection
    const headerProps = {header, toggleHidden, hasSubsection, headerOptions }
    const optionProps = {option}
    const listStyle = this.state.hidden ? {height: '0px', overflow: 'hidden'} : {}
    const menuItems = section.map((item, idx) => {
      let {id, description, name, price, spiciness} = item
      let menuItemProps = { id, description, name, price, spiciness, saved: cartIds.has(id)}
      return <MenuItem key={Math.random()} {...menuItemProps} />
    })
    return (
      <div className='menu-section-container'>
        <MenuSectionHeader {...headerProps}/>
        <div style={listStyle}>
          {menuItems}
          <SectionOptionList {...optionProps}/>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = ({cart}) => {
//   return {cart}
// }
//
// const MenuSection = connect(
//   null, mapStateToProps
// )(MenuSectionPresentational)
//
// export default MenuSection
