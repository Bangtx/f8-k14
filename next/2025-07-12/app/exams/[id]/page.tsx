'use client'

import {Box, Grid} from "@mui/material";
import style from './style.module.sass'
import QuestionDescription from './Description'
import QuestionSelection from './Selection'
import HeaderBar from './Header'
import FooterBar from './Footer'


const defaultExam = {
  id: undefined,
  title: '',
  description: '',
  details: [
    {
      id: undefined,
      section: 0,
      module: 0,
      question: {
        id: undefined,
        code: '',
        description: '',
        question: '',
        type: 'multiple-choice',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '',
        explanation: '',
        topic: {
          id: 1,
          name: "Mathematics",
          shortName: "Math"
        }
      }
    }
  ]
}

export const PARTS = [
  {section: 1, module: 1},
  {section: 1, module: 2},
  {section: 2, module: 1},
  {section: 2, module: 2},
]

export default function () {

  return (
    <>
      <HeaderBar/>
      <Box sx={{margin: '0 5%'}} className={style.main}>
        <Grid container>
          <Grid size={6} sx={{paddingTop: '10px'}}>
            <QuestionDescription/>
          </Grid>
          <Grid size={6}>
            <QuestionSelection/>
          </Grid>
        </Grid>
      </Box>
      <FooterBar/>
    </>
  )
}