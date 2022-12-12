import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import { Container, TextContent, Title, TitleHighlight, Image } from "./style";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br />O seu futuro global agora
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo em comunidade com
            os melhores experts.
          </TextContent>
          <Link to="/login"><Button>Entrar</Button></Link>
        </div>
        <div>
          <Image src="/assets/images/banner.png" alt="imagem principal" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
