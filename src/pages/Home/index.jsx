import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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

const navigate = useNavigate()

async function registerNewUser(){
 await api.post('/usuarios', {
    name: inputName.current.value,
    age: parseInt(inputAge.current.value),
    email: inputEmail.current.value 
  })
  
  
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

        <Button type='button' onClick={registerNewUser} theme = "primary" >
        Cadastrar Usuario
        </Button>
      </Form>

      <Button type='button' onClick={() =>navigate('/lista-de-usuarios')}>
        Ver Lista de Usuarios
        </Button>

    </Container>

    

  )
}

export default Home 
