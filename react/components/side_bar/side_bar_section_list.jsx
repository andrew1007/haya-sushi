import React from 'react'
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const Section = props => {
  const { classes, sections, handleSectionClick } = props
  const list = sections.map((name, idx) => {
    const style = {
      color: 'red'
    }
    return (
      <div key={idx}>
        <ListItem button className={classes.button} onClick={() => handleSectionClick(name)}>
          <ListItemText primary={name}/>
        </ListItem>
      </div>
    )
  })
  return (
    <List color='primary'>
      {list}
    </List>
  )
}

const styles = theme => ({
  button: {
    maxWidth: '200px',
    backgroundColor: theme.palette.primary.dark,
    padding: '10px',
  },
  text: {
    fontSize: '15px',
    color: theme.palette.primary.contrastText
  }
});
export default withStyles(styles)(Section)
