import { useEffect, useMemo } from "react"
import dayjs from "dayjs"
import Swal from "sweetalert2"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal"

import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: activeNote, saveMessage, isSaving } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(activeNote)

  const dateString = useMemo(() => {
    return dayjs(date).format('dddd, MMMM D, YYYY h:mm A');
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (saveMessage.length > 0) {
      Swal.fire({
        title: 'Saved',
        text: saveMessage,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  }, [saveMessage])

  const handlerSave = () => {
    dispatch(startSaveNote())
  }

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
        <Button onClick={handlerSave} color="primary" sx={{padding: 2}} disabled={isSaving}>
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
