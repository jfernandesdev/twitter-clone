import React from 'react';

import { 
  Container, 
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Jeferson Fernandes</strong> 
            <span>@jfernandesdev</span>
            <Dot />
            <time>07 de out</time>
          </Header>

          <Description>Hello world! I am a description 🤘</Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 21
            </Status>
            <Status>
              <RetweetIcon /> 96
            </Status>
            <Status>
              <LikeIcon /> 999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;