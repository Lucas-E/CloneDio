import React from "react";
import MailLockIcon from "@mui/icons-material/MailLock";
import MailIcon from "@mui/icons-material/Mail";
import Header from "../../components/Header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu Login</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
              <form action="">
                <Input placeholder="Email" leftIcon={<MailIcon />}></Input>
                <Input
                  placeholder="senha"
                  type="password"
                  leftIcon={<MailLockIcon />}
                ></Input>
                <Link to="/feed"><Button variant="secondary">Entrar</Button></Link>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
