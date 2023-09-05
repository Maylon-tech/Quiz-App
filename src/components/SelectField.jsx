import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const SelectField = (props) => {
    const { label } = props
    const [value, setValue] = useState("")

    const handleChange = () => {}

  return (
    <Box mt={3}  width="100%">
        <FormControl size="small" fullWidth>
            <InputLabel> {label} </InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                <MenuItem>Option One</MenuItem>
                <MenuItem>Option two</MenuItem>
                <MenuItem>Option Three</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField