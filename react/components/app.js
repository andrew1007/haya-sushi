import React, { Component } from 'react'
import { getSections } from '../actions/section_actions'
import { getOptions } from '../actions/option_actions'
import { connect } from 'react-redux'
import AppHeader from './app_header/app_header'
import SideBar from './side_bar/side_bar'
import MenuSectionList from './menu_section/menu_section_list'
import Button from 'material-ui/Button';
import Home from './home/home'

class AppPresentational extends Component {

  constructor() {
    super()
    this.state = {
      currentSection: 0,
      loaded: false,
      showSidebar: false
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
    if (window.innerWidth < 1000) {
      this.toggleSidebar()
    }
  }

  toggleSidebar = _ => {
    this.setState({showSidebar: !this.state.showSidebar})
  }

  render() {
    const sideBarProps = {
      handleSectionClick: this.handleSectionClick,
      sections: ['Info'].concat(Object.keys(this.props.menu)),
      showSidebar: this.state.showSidebar
    }
    const menuSectionProps = {
      menuItems: this.props.menu[this.state.currentSection] || [{}],
      option: this.props.option,
      currentSection: this.state.currentSection,
      showSidebar: this.state.showSidebar,
      toggleSidebar: this.toggleSidebar
    }
    const appHeaderProps = {
      toggleSidebar: this.toggleSidebar
    }
    const appStyle = {
      display: 'flex',
      flexDirection: 'column',
    }
    const contentStyle = {
      display: 'flex',
      marginLeft: '30px',
      opacity: this.state.loaded ? 1 : 0
    }
    const transparentLayerStyle = {
      zIndex: this.state.showSidebar ? 10 : -10,
      position: 'fixed',
      backgroundColor:'transparent',
      width: '100%',
      height: '100%'
    }
    const headerStyle = {
      display: 'flex',
    }
    return (
      <div style={appStyle}>
        <div style={transparentLayerStyle} onClick={this.toggleSidebar}/>
        <AppHeader {...appHeaderProps}/>
        <div className='app-header-filler'></div>
        <div className='app-content-container' style={contentStyle}>
          <div className='app-sidebar-filler'/>
          <SideBar {...sideBarProps}/>
            <div style={transparentLayerStyle} onClick={this.toggleSidebar}></div>
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
