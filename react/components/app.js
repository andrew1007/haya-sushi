import React, { Component } from 'react'
import { getSections } from '../actions/section_actions'
import { getOptions } from '../actions/option_actions'
import { getCart } from '../actions/cart_actions'
import { connect } from 'react-redux'
import AppHeader from './app_header/app_header'
import SideBar from './side_bar/side_bar'
import MenuSectionList from './menu_section/menu_section_list'
import Button from 'material-ui/Button'
import Home from './home/home'
import SavedItems from './saved_items/saved_items'

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
    const {getSections, getOptions, getCart} = this.props
    await Promise.all([getSections(), getOptions(), getCart()])
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
    this.setState({showSidebar: !this.state.showSidebar}, () => {
      document.body.style.overflow = this.state.showSidebar ? 'hidden' : 'auto'
    })
  }

  render() {
    const savedItems = `Saved Items`
    const savedItemsProps = {
      cart: this.props.cart
    }
    const sideBarProps = {
      handleSectionClick: this.handleSectionClick,
      sections: ['Info', savedItems].concat(Object.keys(this.props.menu)),
      showSidebar: this.state.showSidebar
    }
    const menuSectionListProps = {
      menuItems: this.props.menu[this.state.currentSection] || [],
      option: this.props.option,
      currentSection: this.state.currentSection,
      showSidebar: this.state.showSidebar,
      toggleSidebar: this.toggleSidebar,
      cart: this.props.cart,
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
      width: '100vw',
      height: '100vh'
    }
    const headerStyle = {
      display: 'flex',
    }
    let pageRender
    const selection = this.state.currentSection
    if (selection === 'Info') {
      pageRender = <Home/>
    } else if (selection === savedItems) {
      pageRender = <SavedItems {...savedItemsProps}/>
    } else {
      pageRender = <MenuSectionList {...menuSectionListProps}/>
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
          {pageRender}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSections: _ => dispatch(getSections()),
    getOptions: _ => dispatch(getOptions()),
    getCart: _ => dispatch(getCart()),
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    option: state.option,
    cart: state.cart
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresentational)

export default App
