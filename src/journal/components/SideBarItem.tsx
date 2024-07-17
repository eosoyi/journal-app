import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import React, { useMemo } from "react"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

interface Props {
    title: string;
    body: string;
    date: string;
    id: string;
    imageUrls: [];
}

export const SideBarItem: React.FC<Props> = ({ title, body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
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
