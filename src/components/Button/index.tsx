import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

const Button = ({
  children,
  disabled
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <S.Wrapper disabled={disabled}>{children}</S.Wrapper>
)

export default Button
