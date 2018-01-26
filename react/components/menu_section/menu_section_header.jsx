import React, {Component} from 'react'
import Button from 'material-ui/Button';

export default class MenuSectionHeader extends Component {
  constructor() {
    super()
    this.state = {
      hidden: true
    }
  }

  render() {
    const {hasHeader, subSection, toggleHidden} = this.props
    let style
    if (hasHeader) {
      style = {
        borderBottom: '1px solid #EF5350',
        fontSize: '25px',
        marginBottom: '10px',
        width: '100%',
        justifyContent: 'flex-start',
        textTransform: 'none'
      }
      return (
        <Button style={style} onClick={toggleHidden}>
          {subSection}
        </Button>
      )
    } else {
      return <div></div>
    }
  }
}