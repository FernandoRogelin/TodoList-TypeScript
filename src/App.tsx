import { useState } from 'react'

import { useForm } from 'react-hook-form'

import * as S from './styles'
import Input from 'components/Input'
import Button from 'components/Button'

type FormStates = {
  text: string
}

function App() {
  const [list, setList] = useState<string[]>([])

  const { handleSubmit, register, formState, setValue } = useForm<FormStates>({
    mode: 'onChange'
  })

  function onSubmit(values: FormStates) {
    setList([...list, values.text])
    setValue('text', '')
  }

  function removeItem(index: number) {
    setList(list.filter((item, i) => i !== index))
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Todo-list ReactJS with TypeScript</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            error={formState.errors}
            placeholder="Write a text here"
            register={() => register('text', { required: 'Campo obrigatório' })}
          />
          <Button disabled={!formState.isValid || formState.isSubmitting}>
            Add item
          </Button>
        </S.Form>
        <S.List>
          {list.map((item, index: number) => (
            <S.Item key={index}>
              {item}
              <S.Remove onClick={() => removeItem(index)}>X</S.Remove>
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Wrapper>
  )
}

export default App
