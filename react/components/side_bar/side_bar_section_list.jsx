import React from 'react'
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const SideBarSectionList = props => {
  const { classes, sections, handleSectionClick } = props
  const list = sections.map((name, idx) => {
    const style = {
      justifyContent: 'flex-start',
      textTransform: 'none',
      fontSize: '20px',
      width: '100%',
      flexDirection:'row',
    }
    // <ListItem button className={classes.button} onClick={() => handleSectionClick(name)}>
    //   <ListItemText primary={name}/>
    // </ListItem>
    return (
      <Button className='side-bar-button' key={idx} onClick={() => handleSectionClick(name)}>
        {name}
      </Button>
    )
  })
  return (
    <List className='side-bar-list' color='primary'>
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
export default withStyles(styles)(SideBarSectionList)
