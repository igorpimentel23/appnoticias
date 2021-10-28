import React from 'react';

import { IPost } from '../../pages/Main';

import { Container, Title, TextBody, TextAuthor, TextDate } from './styles';

interface ICardProps {
  post: IPost;
}

export const Card: React.FC<ICardProps> = ({ post }) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <TextBody>{post.text}</TextBody>
      <TextAuthor>{post.author}</TextAuthor>
      <TextDate>{post.created_at}</TextDate>
    </Container>
  );
};
