import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TextEditorCard = styled.div`
  background-color: #1b1c22;
  width: 80%;
  display: flex;
  flex-direction: row;
`

export const TextEditorImg = styled.div`
  width: 50%;
`
export const Heading1 = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  text-align: center;
  font-weight: normal;
`

export const TextEditor = styled.img`
  width: 100%;
`

export const TextArea = styled.div`
  width: 50%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 15px;
  margin: 20px;
`

export const ButtonsContainer = styled.ul`
  list-style-type: none;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #334155;
  margin: 0px;
`

export const ListItem = styled.li`
  text-decoration: none;
`
export const Btn = styled.button`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
`

export const HrLine = styled.hr`
  color: #cbd5e1;
`

export const TextAreaInputField = styled.textarea`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f1f5f9;
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
