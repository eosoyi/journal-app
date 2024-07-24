import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../journal/components/ImageGallery"
import { useForm } from "../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/Store"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../store/journal/Thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
    const { active: note, messageSaved, isSaving } = useSelector((state: RootState) => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    const fileInputRef = useRef();
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);


    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);



    return (
        <Grid className="animate__animated animate__fadeIn animate__faster" container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>
                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />
                <IconButton color="primary" onClick={() => fileInputRef.current.click()} >
                    <UploadOutlined></UploadOutlined>
                </IconButton>
                <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }} >
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

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline/> Borrar
                </Button>
            </Grid>

            <ImageGallery
                images={note.imageUrls}
            />

        </Grid>
    )
}
