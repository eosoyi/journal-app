import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React, { useMemo } from "react"

interface Props {
    title: string;
    body: string;
}

export const SideBarItem: React.FC<Props> = ({ title, body }) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot></TurnedInNot>
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle}></ListItemText>
                    <ListItemText secondary={body}></ListItemText>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
