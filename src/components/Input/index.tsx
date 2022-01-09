import { InputHTMLAttributes } from 'react'
import * as S from './styles'

import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  error: FieldErrors
  register: () => UseFormRegisterReturn
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ error, register, name = '', ...props }: InputProps) => (
  <div>
    <S.Input {...register()} {...props} />
    <ErrorMessage
      name={name}
      errors={error}
      render={({ message }) => <S.Error>*{message}</S.Error>}
    />
  </div>
)

export default Input
