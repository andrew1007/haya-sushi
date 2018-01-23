import React from 'react'
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const Section = props => {
  const list = props.list.map((name, idx) => {
    const { classes } = props
    const style = {
      color: 'red'
    }
    return (
      <div key={idx}>
        <ListItem button className={classes.button} onClick={() => alert('seafsd')}>
          <ListItemText primary={name}/>
        </ListItem>
      </div>
    )
  })
  // <ListItemText disableTypography className={classes.text} primary={name}/>
  return (
    <List color='primary'>
      {list}
    </List>
  )
}

const styles = theme => ({
  button: {
    width: '100%',
    maxWidth: '100px',
    backgroundColor: theme.palette.primary.dark,
    padding: '10px',
  },
  text: {
    fontSize: '15px',
    color: theme.palette.primary.contrastText
  }
});
export default withStyles(styles)(Section)
