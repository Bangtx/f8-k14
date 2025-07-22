import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Context, ProviderI} from './page'
import React, {useContext, useState} from "react";

export default function () {
  const injector: ProviderI = useContext(Context)
  const {question} = injector
  const [key, setKey] = useState(0)
  // const [answer, setAnswer] = useState(question.answer || '')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    question.answer = e.target.value
    setKey(key + 1) // force update

    // useState(e.target.value)
  }

  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
      value={question.answer || ''}
      onChange={onChange}
    >
      <FormControlLabel value={'A'} control={<Radio />} label={question.optionA} />
      <FormControlLabel value={'B'} control={<Radio />} label={question.optionB} />
      <FormControlLabel value={'C'} control={<Radio />} label={question.optionC} />
      <FormControlLabel value={'D'} control={<Radio />} label={question.optionD} />
    </RadioGroup>
  )
}