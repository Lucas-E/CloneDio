import React from "react";
import { Fragment } from "react";

import { Container, NameText, Progress, UserPicture } from "./style";

const UserInfo = ({ name, image, percent }) => {
  return (
    <Fragment>
      <Container>
        <UserPicture src={image} />
        <div>
          <NameText>{name}</NameText>
          <Progress percentual={percent} />
        </div>
      </Container>
    </Fragment>
  );
};

export default UserInfo;
