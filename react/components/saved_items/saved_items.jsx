import React, { Component } from 'react'
import MenuSection from '../menu_section/menu_section'
import { connect } from 'react-redux'
import { getCart } from '../../actions/cart_actions'

class SavedItemsPresentational extends Component {
  constructor() {
    super()
    this.state = {
      cart: {[""]: []}
    }
  }

  handleDelete() {

  }

  async componentWillMount() {
    await this.props.getCart()
    this.setState({saved: this.props.cart})
  }

  render() {
    const menuSectionProps = {
      section: this.state.cart,
      cart: this.state.cart,
      currentSection: 'Saved Items',
      subSection: null,
      option: {details:[], title: null},
      hasSubsection: false,
      headerOptions: `    ${Object.values(this.state.cart).length}`
    }
    const sum = this.state.cart.map((entry) => parseFloat(entry.price)).reduce((a, b) => a + b, 0).toFixed(2)
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

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: _ => dispatch(getCart())
  }
}

const SavedItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedItemsPresentational)

export default SavedItems
