import { useRef } from 'react'
import api from '../../services/api'

import { Title } from './styles'
import { Container } from './styles'
import { Form } from './styles'
import { ContainerInput } from './styles'
import { Input } from './styles'
import { InputLabel } from './styles'



import  Button  from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function Home() {

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

async function registerNewUser(){

 const data = await api.post('/usuarios', {
    name: inputName.current.value,
    age: parseInt(inputAge.current.value),
    email: inputEmail.current.value 
  })
  
  console.log(data)
}

  return (

    <Container>

      <TopBackground/>

      <Form>
        <Title>Cadasatro de Usuarios</Title>

        <ContainerInput>
          
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuario' ref= {inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuario' ref={inputAge} />
            </div>

          

        </ContainerInput>

        <div style={{width: '100%'}}>
          <InputLabel>
            E-mail<span>*</span>
          </InputLabel>
          <Input type='text' placeholder='E-mail do Usuario' ref={inputEmail} />

        </div>

        <Button type='button' onClick={registerNewUser}>
        Cadastrar Usuario
        </Button>
      </Form>



    </Container>

  )
}

export default Home 
