import React from 'react'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


const AppHeader = props => {
  const { classes, toggleSidebar } = props
  const style = {
    borderBottom: '2px solid #EF5350',
    position: 'fixed',
    width: '100vw',
    backgroundColor: '#212121',
    zIndex: 3,
  }
  const logoStyle = {
    fontSize: '40px'
  }
  const menuIconStyle = {
    zIndex: 100
  }
  return (
    <div className='app-header-container' style={style}>
      <AppBar position="static">
        <Toolbar>
          <div style={menuIconStyle} onClick={toggleSidebar} className='app-header-menu-icon'>
            <svg fill="#EF5350" height="70" viewBox="0 0 24 24" width="70" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
            </svg>
          </div>
          <Typography type="title" color="inherit" className={classes.flex}>
            <div className='app-header-logo'>Haya Sushi</div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styles = {
  root: {
    width: '100%',
    borderBottom: '2px solid #EF5350'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white'
  },
};
export default withStyles(styles)(AppHeader)
