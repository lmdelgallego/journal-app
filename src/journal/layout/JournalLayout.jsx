import { Box } from "@mui/material"
import { NavBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box>
        <NavBar drawerWidth={drawerWidth}/>
        {/* SIDEBAR drawerWidth */}

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          {/* TOOLBAR */}
          {children}
        </Box>
    </Box>
  )
}
