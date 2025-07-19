import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

export default function () {

  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
    >
      <FormControlLabel value={'A'} control={<Radio />} label={'optionA'} />
      <FormControlLabel value={'B'} control={<Radio />} label={'optionB'} />
      <FormControlLabel value={'C'} control={<Radio />} label={'optionC'} />
      <FormControlLabel value={'D'} control={<Radio />} label={'optionD'} />
    </RadioGroup>
  )
}