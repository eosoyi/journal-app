import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../journal/components/ImageGallery"
import { useForm } from "../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/Store"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../store/journal/journalSlice"
import { startSaveNote } from "../store/journal/Thunks"

export const NoteView = () => {
    const { active: note } = useSelector((state: RootState) => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);


    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);
    return (
        <Grid className="animate__animated animate__fadeIn animate__faster" container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}></SaveOutlined>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                >
                </TextField>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió el dia de hoy?"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                >
                </TextField>
            </Grid>

            <ImageGallery></ImageGallery>

        </Grid>
    )
}
