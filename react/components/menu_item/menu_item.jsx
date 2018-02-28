import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemName from './menu_item_name'
import ItemDescription from './menu_item_description'
import ItemPrice from './menu_item_price'
import MenuItemSVG from './menu_item_svg'
import { getCart, ApiCartCreateRequest, ApiCartDeleteRequest } from '../../actions/cart_actions'
import Button from 'material-ui/Button'

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
}

class MenuItemPresentational extends Component {
  constructor() {
    super()
    this.state = {
      saved: false
    }
  }

  componentWillMount() {
    this.setState({ saved: this.props.saved})
  }

  async handleCartItemClick() {
    this.setState({saved: !this.state.saved}, () => {
      if (!this.state.saved) {
        ApiCartDeleteRequest({item_id: this.props.id})
      } else {
        ApiCartCreateRequest({item_id: this.props.id})
      }
    })
  }

  render() {
    const {id, description, name, price, spiciness, saved} = this.props
    const itemNameProps = {name, saved}
    const itemDescriptionProps = {description}
    const itemPriceProps = {price}
    const cartIconAdd = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    const cartIconRemove = "M19 13H5v-2h14v2z"
    return (
      <div style={containerStyle} key={this.props.id} ref={(ctx) => {this.menuItem = ctx}}>
        <div style={{display:'flex'}}>
          <Button className='menu-item-button' style={cartIconStyle} onClick={() => this.handleCartItemClick()}>
            <MenuItemSVG d={this.state.saved ? cartIconRemove : cartIconAdd}/>
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
