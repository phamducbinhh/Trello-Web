import { Box, Container } from '@mui/material'
import React from 'react'
import SelectMode from './Components/SelectMode'

const App: React.FC = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: (theme: any) => theme.palette.primary.main }}
    >
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
    </Container>
  )
}

export default App
