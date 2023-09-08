import { Box } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box>
        <NavBar drawerWidth={drawerWidth}/>
        {/* SIDEBAR drawerWidth */}
        <SideBar drawerWidth={ drawerWidth}/>

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
