import React from "react";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Fragment } from "react";

const Card = ({background, avatar, ...rest}) => {
  return (
    <Fragment>
      <CardContainer>
        <ImageBackground src={background}/>
        <Content>
          <Content>
            <UserInfo>
              <UserPicture src={avatar} />
              <div>
                <h4>Pablo Henrique</h4>
                <p>há 8 minutos</p>
              </div>
            </UserInfo>
            <PostInfo>
              <h4>Projeto para curso de HTML e CSS</h4>
              <p>
                Projeto feito no curso de HTML e CSS no bootcamp dio do Global
                Advance <strong>Saiba mais</strong>
              </p>
            </PostInfo>
            <HasInfo>
              <h4>#HTML #CSS #Javascript</h4>
              <p>
                <ThumbUpIcon /> 18
              </p>
            </HasInfo>
          </Content>
        </Content>
      </CardContainer>
    </Fragment>
  );
};

export default Card;
