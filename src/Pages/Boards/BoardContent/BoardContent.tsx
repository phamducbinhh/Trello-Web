import { Box } from '@mui/material'
import React from 'react'

const BoardContent: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme: any) => theme.palette.primary.main,
        width: '100%',
        height: (theme: any) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
