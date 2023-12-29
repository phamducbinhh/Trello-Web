import { Box } from '@mui/material'
import React from 'react'

const BoardBar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme: any) => theme.palette.primary.dark,
        width: '100%',
        height: (theme: any) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar
