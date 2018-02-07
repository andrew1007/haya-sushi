import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemName from './menu_item_name'
import ItemDescription from './menu_item_description'
import ItemPrice from './menu_item_price'
import { getCart, ApiCartCreateRequest, ApiCartDeleteRequest } from '../../actions/cart_actions'
import Button from 'material-ui/Button'

class MenuItemPresentational extends Component {
  componentWillMount() {
  }

  async handleCartItemClick() {
    if (this.props.saved) {
      await ApiCartDeleteRequest({item_id: this.props.id})
    } else {
      await ApiCartCreateRequest({item_id: this.props.id})
    }
    this.props.getCart()
  }

  render() {
    const {id, description, name, price, spiciness, saved} = this.props
    const itemNameProps = {name, saved}
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
    const cartIconAdd = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    const cartIconRemove = "M19 13H5v-2h14v2z"
    return (
      <div style={containerStyle} key={this.props.id}>
        <div style={{display:'flex'}}>
          <Button style={cartIconStyle} onClick={() => this.handleCartItemClick()}>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="#EF5350" width="35" height="35" viewBox="0 0 24 24">
              <path d={saved ? cartIconRemove : cartIconAdd}/>
            </svg>
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
    getCart: () => dispatch(getCart())
  }
}

const mapStateToProps = ({cart}) => {
  return {cart}
}

const MenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItemPresentational)

export default MenuItem
