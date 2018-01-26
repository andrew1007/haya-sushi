import React, {Component} from 'react'
import Button from 'material-ui/Button';
import {List, ListItem} from 'material-ui/List';

export default class MenuSectionHeader extends Component {
  constructor() {
    super()
    this.state = {
      hidden: true
    }
  }

  render() {
    const {hasSubsection, header, toggleHidden} = this.props
    let style
    style = {
      borderBottom: '1px solid #EF5350',
      fontSize: '25px',
      marginBottom: '10px',
      width: '100%',
      justifyContent: 'flex-start',
      textTransform: 'none'
    }
    if (hasSubsection) {
      return (
        <Button style={style} onClick={toggleHidden}>
          {header}
        </Button>
      )
    } else {
      return (
        <ListItem style={style} onClick={toggleHidden}>
          {header}
        </ListItem>
      )
    }
  }
}
