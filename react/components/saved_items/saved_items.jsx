import React, { Component } from 'react'
import MenuSection from '../menu_section/menu_section'
import { connect } from 'react-redux'

class SavedItemsPresentational extends Component {

  render() {
    console.log(this.props);
    const menuSectionProps = {
      section: this.props.cart,
      cart: this.props.cart,
      currentSection: 'Saved Items',
      subSection: null,
      option: {details:[], title: null},
      hasSubsection: false,
      headerOptions: `    ${Object.values(this.props.cart).length}`
    }
    const sum = this.props.cart.map((entry) => parseFloat(entry.price)).reduce((a, b) => a + b, 0).toFixed(2)
    const subtotalContainerStyle = {
      width: '100%'
    }
    return (
      <div className='menu-section-container'>
        <MenuSection {...menuSectionProps}/>
        <div className='menu-section-container' style={subtotalContainerStyle}>
          <div className='menu-section-subtotal'>Subtotal: {sum}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cart}) => {
  return { cart }
}

const SavedItems = connect(
  mapStateToProps,
  null
)(SavedItemsPresentational)

export default SavedItems
