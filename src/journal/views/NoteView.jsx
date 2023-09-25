import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { useMemo } from "react"
import dayjs from "dayjs"

export const NoteView = () => {

  const { active: activeNote } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(activeNote)

  const dateString = useMemo(() => {
    return dayjs(date).format('dddd, MMMM D, YYYY h:mm A');
  }, [date])

  return (
    <Grid container
      className='animate__animated animate__fadeIn animate__faster'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ marginBottom: 1}}
    >
      <Grid item >
        <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
      </Grid>
      <Grid item >
        <Button color="primary" sx={{padding: 2}}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Some awesome title"
          label="Some awesome title"
          fullWidth
          sx={{ border: 'none',  marginBottom: 1}}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          placeholder="What happened today?"
          fullWidth
          multiline
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
