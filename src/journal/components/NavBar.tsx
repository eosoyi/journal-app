import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/Thunks'

interface Props {
    drawerWidth: number
}

export const NavBar: React.FC<Props> = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogout());
    }
    
    return (
        <AppBar position='fixed'
            sx={{ width: { sm: `calc(100%  - ${drawerWidth}px)`, ml: { sm: `${drawerWidth}px` } } }}
        >
            <Toolbar>
                <IconButton color='inherit' edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined></MenuOutlined>
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>Journal App</Typography>
                    <IconButton onClick={onLogout} color='error'>
                        <LogoutOutlined></LogoutOutlined>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
