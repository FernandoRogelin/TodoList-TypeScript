import styled, { css } from 'styled-components'

type WrapperProps = {
  disabled?: boolean
}

const WrapperModifier = {
  disabled: () => css`
    cursor: not-allowed;
    background-color: #919191;
    border: 2px solid #919191;

    &:hover {
      background-color: #919191;
      border: 2px solid #919191;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ disabled }) => css`
    color: #fff;
    border: none;
    outline: none;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    background-color: #2c3e50;
    border: 2px solid #2c3e50;

    &:hover {
      background-color: #20374e;
      border: 2px solid #20374e;
    }

    ${disabled && WrapperModifier.disabled()}
  `}
`
