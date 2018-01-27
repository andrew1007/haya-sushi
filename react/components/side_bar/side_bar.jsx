import React, { Component } from 'react'
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import SideBarSectionList from './side_bar_section_list'

export default class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  show = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    const { sections, handleSectionClick } = this.props
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      paddingRight: '20px',
      borderRight: '2px solid #EF5350',
      backgroundColor: '#212121'
    }


    const sectionProps = {sections, handleSectionClick}
    const showStatus = this.props.showSidebar ? 'side-bar-show' : 'side-bar-hidden'
    const containerClass = `side-bar-container ${showStatus}`
    return (
      <div className={containerClass} style={containerStyle}>
        <SideBarSectionList {...sectionProps}/>
      </div>
    )
  }
}
