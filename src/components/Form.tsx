import { FormProvider, useForm } from 'react-hook-form'
import { Steps } from './Stepper'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { PersonalInfo } from './StepComponents/PersonalInfo'

const schema = z
  .object({
    name: z.string().min(1),
    age: z.string().min(1),

    street: z.string().min(1),
    streetNumber: z.string().min(1),
    city: z.string().min(1),

    mobileNumber: z.string().min(1),
    telNumber: z.string().min(1),
  })
  .required()

type FormValues = z.infer<typeof schema>

const sourceSteps = [
  {
    label: 'Dados Pessoais',
    Component: <PersonalInfo />,
    hasError: false,
  },
  {
    label: 'Dados de Endereço',
    Component: <p>Passo 2</p>,
    hasError: false,
  },
  {
    label: 'Dados de Contato',
    Component: <p>Passo 3</p>,
    hasError: true,
  },
]

export function Form() {
  const methods = useForm({
    resolver: zodResolver(schema),
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      name: '',
      age: '',
      street: '',
      city: '',
      streetNumber: '',
      mobileNumber: '',
      telNumber: '',
    },
  })

  if (methods.formState.isSubmitSuccessful) {
    return (
      <Box>
        <Typography variant="h2">Formulário enviado com sucesso!</Typography>
        <Button onClick={() => methods.reset()}>
          Clique aqui para enviar um novo cadastro
        </Button>
      </Box>
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Steps items={sourceSteps} />
      </form>
    </FormProvider>
  )
}
