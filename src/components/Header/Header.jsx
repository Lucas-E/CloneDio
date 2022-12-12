import React from "react";
import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./style";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src="/assets/images/logo.png" alt="" />
          {autenticado ? (
            <Fragment>
              <BuscarInputContainer>
                <Input placeholder="Buscar" />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </Fragment>
          ) : null}
        </Row>
        <Row>
          <Link to="/">
            <MenuRight href="#">Home</MenuRight>
          </Link>
          {autenticado ? (
            <Fragment>
              <UserPicture src="https://avatars.githubusercontent.com/u/92558269?v=4" />
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/login">
                <Button>Entrar</Button>
              </Link>
              <Link to="/register">
                <Button>Cadastrar</Button>
              </Link>
            </Fragment>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
