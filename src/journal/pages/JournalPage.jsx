import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active: activeNote } = useSelector(state => state.journal);

  const handleAddNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        (activeNote)
        ? <NoteView/>
        : <NothingSelectedView/>
      }
      <IconButton
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.dark'
          },
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
        onClick={handleAddNewNote}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
