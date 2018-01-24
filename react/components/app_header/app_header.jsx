import React from 'react'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


const AppHeader = props => {
  const { classes } = props
  const style = {
    borderBottom: '2px solid #EF5350'
  }
  return (
    <div style={style}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={props.handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            <h2>Haya Sushi</h2>
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
