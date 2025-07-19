import style from "./style.module.sass";
import {Box} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MultipleChoice from "./MultipleChoice";

export default function () {

  return (
    <>
      <Box className={style.toolBar}>
        <Box className={style.numberOfQuestion}>12</Box>
        <Box>
          <Box>
            <CalculateIcon style={{color: '#1976D2'}}/>
            <span>Calculator</span>
          </Box>
          <Box>
            <BookmarkBorderIcon style={{color: '#1976D2'}}/>
            <span>Mark for review</span>
          </Box>
          <Box>ABC</Box>
        </Box>
      </Box>

      <Box>
        <p>
          Which choice completes the text with the most logical and precise word or phrase?
        </p>
        <MultipleChoice/>
      </Box>
    </>
  )
}