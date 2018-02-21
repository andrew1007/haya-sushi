import React, { Component } from 'react'
import MenuSection from '../menu_section/menu_section'
import { connect } from 'react-redux'

class SavedItemsPresentational extends Component {

  render() {
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
    const subtotalStyle = sum > 0 ? {} : {fontSize: '25px'}
    return (
      <div className='menu-section-container'>
        <MenuSection {...menuSectionProps}/>
        <div className='menu-section-container' style={subtotalContainerStyle}>
          <div className='menu-section-subtotal' style={subtotalStyle}>
            {sum > 0 ? `Subtotal: ${sum}` : `Click on the + symbols next to menu items to add to saved items!`}
          </div>
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
