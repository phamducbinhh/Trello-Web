import { Container } from '@mui/material'
import React from 'react'
import AppBar from '~/Components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

const Boards: React.FC = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: (theme: any) => theme.palette.primary.main }}
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Boards
