import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h1'>JournalPage</Typography> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}

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
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
