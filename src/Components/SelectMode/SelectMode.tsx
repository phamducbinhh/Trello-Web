import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const SelectMode: React.FC = () => {
  const [mode, setMode] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as string)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='label-select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='mode'
        onChange={handleChange}
      >
        <MenuItem value={'light'}>light</MenuItem>
        <MenuItem value={'dark'}>dark</MenuItem>
        <MenuItem value={'system'}>system</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectMode
