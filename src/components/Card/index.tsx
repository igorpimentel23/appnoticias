import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import ptBR, { format } from 'date-fns';

import { IPost } from '../../pages/Home';

import { Container, Title, TextBody, TextAuthor, TextDate } from './styles';

interface ICardProps {
  post: IPost;
}

export const Card: React.FC<ICardProps> = ({ post }) => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Post', {
      id: post.id
    })
  }, [navigation]);

  return (
    <Container onPress={handleNavigation}>
      <Title>{post.title}</Title>
      <TextBody numberOfLines={3}>{post.text}</TextBody>
      <TextAuthor>Autor: {post.author}</TextAuthor>
      <TextDate>
        {format(new Date(post.created_at), 'dd/MM/yyyy', { locale: ptBR })}
      </TextDate>
    </Container>
  );
};
