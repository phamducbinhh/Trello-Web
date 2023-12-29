import { Box, Container } from '@mui/material'
import React from 'react'
import SelectMode from './Components/SelectMode'

const App: React.FC = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: '48px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <SelectMode />
      </Box>

      <Box
        sx={{ backgroundColor: 'primary.dark', width: '100%', height: '58px', display: 'flex', alignItems: 'center' }}
      >
        Board Bar
      </Box>

      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: 'calc(100vh-58px - 48px)',
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
