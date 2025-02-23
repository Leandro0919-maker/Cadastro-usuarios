import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { use } from "react";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerUsers,
  CardUsers,
  Title,
  TrashIcon,
  AvatarUser
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    const updateUsers = users.filter(user => user.id !== id)
    setUsers(updateUsers)
  }

  return (
    <Container>
      <TopBackground />

      <Title>Lista de Usuarios</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} onClick={()=> deleteUsers(user.id)} alt="icone-lixo" />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick= {() =>navigate('/')} >Voltar</Button>
    </Container>
  );
}

export default ListUsers;
