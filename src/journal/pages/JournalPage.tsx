import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../../views/NothingSelectedView"
import { NoteView } from "../../views/NoteView"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/Thunks"
import { RootState } from "../../store/Store"

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state: RootState) => state.journal);

  const onClickNewNot = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        (!!active)
          ? <NoteView></NoteView>
          : <NothingSelectedView></NothingSelectedView>
      }

      <IconButton
        onClick={onClickNewNot}
        size="large"
        disabled={isSaving}
        sx={{
          color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed', right: 50, bottom: 50
        }}>
        <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
      </IconButton>
    </JournalLayout>
  )
}
