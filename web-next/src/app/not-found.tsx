// app/not-found.tsx
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ePathVariables } from '@/config/SupplierConfig'

export default function NotFound() {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        bgcolor: 'background.default'
      }}
    >
      <Typography variant='h3' gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant='body1' sx={{ mb: 3 }}>
        Sorry, we couldn&apos;t find what you were looking for.
      </Typography>
      <Button variant='contained' href={ePathVariables.LOGIN}>
        Go Home
      </Button>
    </Box>
  )
}
