import React, {Component} from 'react'
import MenuItem from '../menu_item/menu_item'
import MenuSectionHeader from './menu_section_header'
import SectionOptionList from '../section_options/section_option_list'

export default class MenuSection extends Component {
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
    const {section, subSection, option, hasHeader} = this.props
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
    const menuItems = section.map(item => {
      let {id, description, name, price, spiciness} = item
      let menuItemProps = {id, description, name, price, spiciness}
      return <MenuItem {...menuItemProps} />
    })
    return (
      <div key={this.props.id}>
        {this.props.hasHeader ? <MenuSectionHeader {...headerProps}/> : null}
        {menuItems}
        {option.length > 0 ? <SectionOptionList {...optionProps}/> : null}
      </div>
    )
  }
}
