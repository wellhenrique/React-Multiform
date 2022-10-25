import React from 'react'

import { Typography, Box } from '@mui/material'
import { FormInput } from '../FormInput'

export function PersonalInfo() {
  return (
    <Box>
      <Typography variant="h6">Dados Pessoais</Typography>

      <Box>
        <FormInput name="Nome" label="Nome" />
      </Box>
    </Box>
  )
}
