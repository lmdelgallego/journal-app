import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'

export const SideBarItem = ({ note }) => {
  const newTitle = useMemo(() => {
    if (note.title.length > 20) {
      return note.title.slice(0, 20) + '...'
    }
    return note.title
  }, [note.title])
  return (
    <ListItem key={note.id} disablePadding>
      <ListItemButton>
        <ListItemIcon><TurnedInNot/></ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle}/>
          <ListItemText secondary={note.body}/>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
