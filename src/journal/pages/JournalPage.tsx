import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../../views/NothingSelectedView"
import { NoteView } from "../../views/NoteView"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal/Thunks"

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNot = () => {
    dispatch(startNewNote());
  }



  return (
    <JournalLayout>
      {/* <NoteView></NoteView> */}
      <NothingSelectedView></NothingSelectedView>
      <IconButton
        onClick={onClickNewNot}
        size="large"
        sx={{
          color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed', right: 50, bottom: 50
        }}>
        <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
      </IconButton>
    </JournalLayout>
  )
}
