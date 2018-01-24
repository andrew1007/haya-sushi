import React, { Component } from 'react'
import MenuSectionItemList from './menu_section_item_list'

export default class MenuSection extends Component {
  render() {
    console.log(this.props.menuItems);
    const style = {
      width: '70%',
      marginTop: '10px',
      maxWidth: '550px'
    }
    return (
      <div style={style}>
        <MenuSectionItemList items={this.props.menuItems}/>
      </div>
    )
  }
}
