import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemName from './menu_item_name'
import ItemDescription from './menu_item_description'
import ItemPrice from './menu_item_price'
import { createCartItem, deleteCartItem } from '../../actions/cart_actions'
import Button from 'material-ui/Button'

class MenuItemPresentational extends Component {
  componentWillMount() {
    console.log(this.props.saved);
  }

  render() {
    const {id, description, name, price, spiciness} = this.props
    const itemNameProps = {name}
    const itemDescriptionProps = {description}
    const itemPriceProps = {price}
    const itemNameStyle = {
      float: 'left',
      marginLeft: '10px'
    }
    const containerStyle = {
      display: 'flex',
      marginBottom: '10px',
      justifyContent: 'space-between',
      marginLeft: '20px'
    }
    const cartIconStyle = {
      margin:'0px',
      padding:'0px',
      minWidth:'50px'
    }
    const cartIconButton =
      <svg xmlns="http://www.w3.org/2000/svg"
        width="35" height="35" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    return (
      <div style={containerStyle} key={this.props.id}>
        <div style={{display:'flex'}}>
          <Button style={cartIconStyle} onClick={this.handleCartItemClick}>
            {cartIconButton}
          </Button>
          <div style={itemNameStyle}>
            <ItemName {...itemNameProps}/>
            <ItemDescription {...itemDescriptionProps}/>
          </div>
        </div>
        <ItemPrice {...itemPriceProps}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCartItem: (cartItemId) => createCartItem(cartItemId),
    deleteCartItem: (cartItemId) => deleteCartItem(cartItemId)
  }
}

const mapStateToProps = ({cart}) => {
  return {cart}
}

const MenuItem = connect(
  mapDispatchToProps,
  mapStateToProps
)(MenuItemPresentational)

export default MenuItem
