import React, { Component } from 'react'
import MenuSectionItemSublist from './menu_section_item_sublist'
import SubListHeader from './menu_section_sublist_header'
import SectionOption from './menu_section_menu_option'

export default class MenuSubsection extends Component {
  constructor() {
    super()
    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    if (this.props.subSection === '') {
      this.setState({hidden: false})
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.section[0].id !== this.props.section[0].id) {
      this.setState({hidden: nextProps.subSection === '' ? false : true})
    }
  }

  toggleHidden = () => {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    const {section, subSection, option} = this.props
    const itemSublistProps = {section, subSection}
    const headerProps = {subSection, toggleHidden: this.toggleHidden}
    const optionProps = {option}
    let listStyle
    if (this.state.hidden) {
      listStyle = {
        height: '0px',
        overflow: 'hidden'
      }
    } else {
      listStyle = {}
    }
    return (
      <div key={this.props.id}>
        <SubListHeader {...headerProps}/>
        <div style={listStyle}>
          <MenuSectionItemSublist {...itemSublistProps}/>
          {option ? <SectionOption {...optionProps}/> : null}
        </div>
      </div>
    )
  }
}
