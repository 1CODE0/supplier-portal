// src/pages/LoginPage.tsx
'use client'
import { useEffect, useCallback, Suspense } from 'react'
import { Button, Paper, Typography, Box, TextField, CircularProgress, Tooltip } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { eAuthStatus, useAuth } from '../../providers/AuthProvider'
import { CustomLoader } from '../../utilities/CustomLoader'
import { ePathVariables } from '../../config/SupplierConfig'
import { useNav } from '@/hooks/useNav'

interface FormValues {
  username: string
}

const LoginPage = () => {
  const { login, status } = useAuth()
  const { replace } = useNav()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      replace(ePathVariables.ORDERS)
    }
  }, [replace])

  const onSubmit = useCallback(
    async (data: FormValues) => {
      await login(data.username)
      replace(ePathVariables.ORDERS)
    },
    [login, replace]
  )

  return (
    <Suspense fallback={<CustomLoader />}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 10 }}>
        <Typography variant='h5' gutterBottom fontWeight='bold'>
          Welcome to Smart Supplier Portal
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            rules={{ required: 'Username is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label='Username'
                variant='outlined'
                error={!!errors.username}
                helperText={errors.username?.message}
                InputProps={{
                  endAdornment: (
                    <Tooltip title='Use your company-assigned login'>
                      <i className='ri-information-line' style={{ cursor: 'pointer' }} />
                    </Tooltip>
                  )
                }}
              />
            )}
          />

          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting || status === eAuthStatus.PENDING}
            startIcon={(isSubmitting || status === eAuthStatus.PENDING) && <CircularProgress size={20} />}
          >
            {isSubmitting || status === eAuthStatus.PENDING ? 'Logging in…' : 'Login'}
          </Button>
        </Box>
      </Paper>
    </Suspense>
  )
}

export default LoginPage
