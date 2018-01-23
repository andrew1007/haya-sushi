import React, { Component } from 'react'
import MenuSectionItemList from './menu_section_item_list'


export default class MenuSection extends Component {
  render() {
    console.log(this.props.menuItems);
    return (
      <div>
        <MenuSectionItemList items={this.props.menuItems}/>
      </div>
    )
  }
}
