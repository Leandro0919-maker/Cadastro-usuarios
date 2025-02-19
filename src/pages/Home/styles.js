import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 
  padding: 20px;
  height: 100vh;
  `

export const Form = styled.form`
display: flex;
flex-direction: column; 
align-items: center;
gap: 20px;
max-width: 500px;
`

export const Title = styled.h2`
color: #ffffff;
text-align: center; 
font-size: 38px;
font-style: italic;
font-weight: 600;
`

export const ContainerInput = styled.div`
display: flex;  
gap: 20px;
`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #7f3841;
background-color: #ffffff;  
padding: 12px 20px;
outline: none;
width: 100%;
`

export const InputLabel = styled.label`
color: #ffffff;
font-size: 12px;    
font-weight: 600;

span {
    color: #fe7e5d;
font-weight: bold;    
}
`



