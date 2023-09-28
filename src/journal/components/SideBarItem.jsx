import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({ note }) => {

  const dispatch = useDispatch()

  const newTitle = useMemo(() => {
    if (note.title.length > 20) {
      return note.title.slice(0, 20) + '...'
    }
    return note.title
  }, [note.title])

  const handleSelectNote = () => {
    console.log('handleSelectNote', note.id)
    dispatch(setActiveNote(note))
  }

  return (
    <ListItem key={note.id} disablePadding>
      <ListItemButton onClick={handleSelectNote}>
        <ListItemIcon><TurnedInNot/></ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle}/>
          <ListItemText secondary={note.body}/>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
