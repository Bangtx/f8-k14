import style from "./style.module.sass";
import {Box} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MultipleChoice from "./MultipleChoice";
import {Context, ProviderI} from './page'
import {useContext} from "react";

export default function () {
  const injector: ProviderI = useContext(Context)
  const {question} = injector

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
          {question.question}
        </p>
        <MultipleChoice/>
      </Box>
    </>
  )
}