import { Box } from '@mui/material'
import React from 'react'
import SelectMode from '../SelectMode'

const AppBar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme: any) => theme.palette.primary.light,
        width: '100%',
        height: (theme: any) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <SelectMode />
    </Box>
  )
}

export default AppBar
