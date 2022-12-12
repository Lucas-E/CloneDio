import React from "react";
import MailLockIcon from "@mui/icons-material/MailLock";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
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
  PoliticaText,
  HaveAccount,
  TextLogin,
} from "./style";

const Register = () => {
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
              <TitleLogin>Comece agora grátis</TitleLogin>
              <SubTitleLogin>
                Crie sua conta and make the change._
              </SubTitleLogin>
              <form action="">
                <Input placeholder="Nome Completo" leftIcon={<PersonIcon />} />
                <Input placeholder="Email" leftIcon={<MailIcon />} />
                <Input placeholder="Password" leftIcon={<MailLockIcon />} />
                <Link to="/login"><Button variant="secondary">Criar minha conta</Button></Link>
              </form>
              <Column>
                <PoliticaText>
                  Ao clicar em "criar minha conta" grátis, declaro que aceito as
                  Políticas de Privacidade e os Termos de Uso da DIO.
                </PoliticaText>
                <Row>
                  <HaveAccount>Já tenho conta.</HaveAccount>
                  <Link to="/login">
                    <TextLogin>Fazer Login</TextLogin>
                  </Link>
                </Row>
              </Column>
            </Wrapper>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
