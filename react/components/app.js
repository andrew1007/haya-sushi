import React, { Component } from 'react'
import { getSections } from '../actions/section_actions'
import { getOptions } from '../actions/option_actions'
import { connect } from 'react-redux'
import AppHeader from './app_header/app_header'
import SideBar from './side_bar/side_bar'
import MenuSection from './menu_section/menu_section'
class AppPresentational extends Component {

  constructor() {
    super()
    this.state = {
      currentSection: 0,
    }
  }

  async componentWillMount() {
    const {getSections, getOptions} = this.props
    await Promise.all([getSections(), getOptions()])
    const defaultSection = Object.keys(this.props.menu)[0]
    this.setState({currentSection: defaultSection})
  }

  handleSectionClick = (name) => {
    this.setState({currentSection: name})
  }

  render() {
    const sideBarProps = {
      handleSectionClick: this.handleSectionClick,
      sections: Object.keys(this.props.menu)
    }
    const appStyle = {
      display: 'flex',
      flexDirection: 'column',
    }
    const contentStyle = {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '30px'
    }
    const menuSectionProps = {
      menuItems: this.props.menu[this.state.currentSection]
      options: this.props.option
    }
    console.log(this.props);
    return (
      <div style={appStyle}>
        <AppHeader/>
        <div style={contentStyle}>
          <SideBar {...sideBarProps}/>
          <MenuSection {...menuSectionProps}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSections: _ => dispatch(getSections()),
    getOptions: _ => dispatch(getOptions())
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    option: state.option
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresentational)

export default App
