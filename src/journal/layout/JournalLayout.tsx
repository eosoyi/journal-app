import { Box, Toolbar } from "@mui/material"
import { ReactNode } from "react"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

interface Props {
  children: ReactNode
}

const drawerWidth: number = 240;

export const JournalLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} ></NavBar>
      <SideBar drawerWidth={drawerWidth} ></SideBar>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  )
}
