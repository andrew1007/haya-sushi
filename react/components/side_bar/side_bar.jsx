import React, { Component } from 'react'
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Section from './side_bar_section_list'

export default class SideBar extends Component {
  render() {
    const { sections, handleSectionClick } = this.props
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      marginRight: '20px'
    }
    const sectionProps = {sections, handleSectionClick}
    return (
      <div style={containerStyle}>
        <Section {...sectionProps}/>
      </div>
    )
  }
}
