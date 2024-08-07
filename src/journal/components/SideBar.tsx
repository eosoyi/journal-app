import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../store/Store"
import { SideBarItem } from "./SideBarItem"

interface Props {
    drawerWidth: number
}

export const SideBar: React.FC<Props> = ({ drawerWidth }) => {
    const { displayName } = useSelector((state: RootState) => state.auth);
    const { notes } = useSelector((state: RootState) => state.journal)
    return (
        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer variant="permanent" open sx={{ display: { xs: 'block', '&, .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } } }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>{displayName}</Typography>
                </Toolbar>
                <Divider></Divider>
                <List>
                    {
                        notes!.map(note => (
                            <SideBarItem 
                                key={note.id} 
                                {...note}                            
                            />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
