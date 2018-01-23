import React, { Component } from 'react'
import { getSections } from '../actions/section_actions'
import { connect } from 'react-redux'
import AppHeader from './app_header/app_header'
import SideBar from './side_bar/side_bar'
import MenuSection from './menu_section/menu_section'

class AppPresentational extends Component {

  constructor() {
    super()
    this.state = {
      sectionIdx: 0,
      menu: []
    }
  }

  async componentWillMount() {
    await this.props.getSections()
    const menuArr = Object.values(this.props.menu).slice(1)
    this.setState({menu: menuArr, sectionIdx: 4})
  }

  handleSectionClick = (name) => {
    this.setState({currentSection: name})
  }

  render() {
    const appHeaderProps = {
      handleClick: this.handleClick
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
    const {sectionIdx, menu} = this.state
    const menuSectionProps = {
      menuItems: menu[sectionIdx]
    }
    return (
      <div style={appStyle}>
        <AppHeader {...appHeaderProps}/>
        <div style={contentStyle}>
          <SideBar/>
          <MenuSection {...menuSectionProps}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSections: _ => dispatch(getSections())
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresentational)

export default App
