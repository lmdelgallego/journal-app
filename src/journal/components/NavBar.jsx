import { useDispatch } from 'react-redux'
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material'
import { Grid, AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { startLogout } from '../../store/auth'

export const NavBar = ({drawerWidth = 240}) => {

  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(startLogout())
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        width: { sm: `calc(100% - ${drawerWidth}px)`},
        ml: { sm: `${drawerWidth}px`},
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined/>
        </IconButton>

        <Grid container direction='row' justifyContent="space-between" alignItems='center'>
          <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
          <IconButton color="error" onClick={onLogout}><LogoutOutlined/></IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
