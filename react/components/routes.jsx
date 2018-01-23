import React, {Component} from 'react'
import { Route, hashHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import App from './app'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#212121',
      main: '#212121',
      dark: '#212121',
      contrastText: '#EF5350',
    },
    secondary: {
      light: '#212121',
      main: '#212121',
      dark: '#212121',
      contrastText: '#212121',
    },
    text: {
      primary: '#EF5350',
      secondary: '#212121',
      disabled: '#212121'
    },
    action: {
      hover: '#424242'
    }
  },
  shadows: [...Array(25)].map( _ => 0),
});

// <IndexRedirect to='/section'/>
const Routes = ({store}) => {
  return (
    <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
  )
}

export default Routes
