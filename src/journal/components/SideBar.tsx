import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

interface Props {
    drawerWidth: number
}

export const SideBar: React.FC<Props> = ({ drawerWidth }) => {
    return (
        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer variant="permanent" open sx={{ display: { xs: 'block', '&, .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } } }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>Erick Osoy</Typography>
                </Toolbar>
                <Divider></Divider>
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'diciembre'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot></TurnedInNot>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}></ListItemText>
                                        <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}></ListItemText>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
