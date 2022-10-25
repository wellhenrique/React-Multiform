import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

type FormInputProps = {
  name: string
  label: string
}

export function FormInput({ name, label }: FormInputProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField label={label} error={Boolean(fieldState.error)} {...field} />
      )}
    />
  )
}
