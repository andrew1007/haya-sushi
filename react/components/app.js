import React, { Component } from 'react'
import { getSections } from '../actions/section_actions'
import { getOptions } from '../actions/option_actions'
import { connect } from 'react-redux'
import AppHeader from './app_header/app_header'
import SideBar from './side_bar/side_bar'
import MenuSectionList from './menu_section/menu_section_list'
import Home from './home/home'

class AppPresentational extends Component {

  constructor() {
    super()
    this.state = {
      currentSection: 0,
      loaded: false
    }
  }

  async componentWillMount() {
    const {getSections, getOptions} = this.props
    await Promise.all([getSections(), getOptions()])
    const defaultSection = 'Info'
    this.setState({currentSection: defaultSection, loaded: true})
  }

  handleSectionClick = (name) => {
    this.setState({currentSection: name})
  }

  render() {
    const sideBarProps = {
      handleSectionClick: this.handleSectionClick,
      sections: ['Info'].concat(Object.keys(this.props.menu))
    }
    const appStyle = {
      display: 'flex',
      flexDirection: 'column',
    }
    const contentStyle = {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '30px',
      opacity: this.state.loaded ? 1 : 0
    }
    const menuSectionProps = {
      menuItems: this.props.menu[this.state.currentSection] || [{}],
      option: this.props.option,
      currentSection: this.state.currentSection
    }
    return (
      <div style={appStyle}>
        <AppHeader/>
        <div style={contentStyle}>
          <SideBar {...sideBarProps}/>
          {this.state.currentSection === 'Info' ? <Home/> : <MenuSectionList {...menuSectionProps}/> }
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
