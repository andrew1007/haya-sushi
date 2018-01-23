import React, { Component } from 'react'
import { getSections } from '../actions/section_actions'
import { connect } from 'react-redux'
import AppHeader from './app_header/app_header'
import SideBar from './side_bar/side_bar'
import MenuSection from './menu_section/menu_section'

class AppPresentational extends Component {

  componentWillMount() {
    this.props.getSections()
  }

  handleClick = () => {
    alert('clicked')
  }

  render() {
    console.log(this.props);
    const menu = this.props.menu
    const appHeaderProps = {
      handleClick: this.handleClick
    }
    const appStyle = {
      display: 'flex',
      flexDirection: 'column'
    }
    const contentStyle = {
      display: 'flex',
      flexDirection: 'row'
    }
    const menuSectionProps = {
      menuItems: menu['Appetizers']
    }
    console.log(menu['Appetizers']);
    return (
      <div style={appStyle}>
        <AppHeader {...appHeaderProps}/>
        <div style={contentStyle}>
          <SideBar/>
          <MenuSection {...menuSectionProps}/>
        </div>
        LANDING PAGE YES SUCCESS MANG
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
