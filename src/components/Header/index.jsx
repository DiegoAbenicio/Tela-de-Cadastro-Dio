import React from 'react'
import logo from '../../assets/logo-dio.png';

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
  HeaderButton,
} from "./styles";

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <HeaderButton href="/login">Entrar</HeaderButton>
              <HeaderButton href="/register">Cadastrar</HeaderButton>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export { Header }
