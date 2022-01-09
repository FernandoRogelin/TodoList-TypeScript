import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 500px;
  display: flex;
  margin-top: 5rem;
  min-height: 150px;
  border-radius: 1rem;
  align-items: center;
  flex-direction: column;
  background-color: #ff6666;
  box-shadow: 15px 15px #e8e2e2 inset;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin: 0 0 2rem;
  padding-top: 5rem;
`

export const Form = styled.form`
  display: flex;
  align-items: flex-start;

  > button {
    margin-left: 1rem;
  }
`

export const List = styled.ul`
  padding: 0;
  width: 100%;
`

export const Item = styled.li`
  display: flex;
  margin: 0 2rem;
  color: #ffffff;
  padding: 1rem 0;
  font-size: 1.8rem;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #afafaf;
  }
`

export const Remove = styled.span`
  color: #000;
  cursor: pointer;
`
