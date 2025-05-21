// app/loading.tsx
import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export default function GlobalLoading() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default'
      }}
    >
      <CircularProgress />
    </Box>
  )
}
