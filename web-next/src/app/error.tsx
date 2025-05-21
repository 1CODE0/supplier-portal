// app/error.tsx
'use client'

import React from 'react'
import { Box, Button, Typography } from '@mui/material'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  console.error('Global Error Boundary caught an error:', error)

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 2
      }}
    >
      <Typography variant='h4' gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>
        {error.message ?? 'An unexpected error occurred.'}
      </Typography>
      <Button variant='contained' onClick={() => reset()}>
        Try again
      </Button>
    </Box>
  )
}
