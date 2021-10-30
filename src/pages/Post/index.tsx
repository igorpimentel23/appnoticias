import React, { useCallback, useEffect, useState } from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { api } from '../../services/api';
import { IPost } from '../Home';

import { Container,
  Title,
  LoadingContainer,
  TextBody,
  TextAuthor,
  TextDate,
  TitleContainer,
  TextContainer,
  FooterContainer
} from './styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type PostRouteProps = {
  Post: {
    id?: string;
  };
};

export const Post: React.FC = () => {
  const { params } = useRoute<RouteProp<PostRouteProps, 'Post'>>();
  const { id } = params;

  const [post, setPost] = useState({} as IPost);
  const [isLoading, setIsloading] = useState(true);

  const getPost = useCallback(async () => {
    setIsloading(true);

    try {
      const { data } = await api.get(`/news/${id}`);

      setPost(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsloading(false);
    }
  }, [id]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#694fad" />
        </LoadingContainer>
      ) : (
        <>{post && (
          <>
          <TitleContainer>
            <Title>{post.title}</Title>
          </TitleContainer>
          <TextContainer>
            <TextBody>{post.text}</TextBody>
          </TextContainer>
          <FooterContainer>
            <TextAuthor>{post.author}</TextAuthor>
            <TextDate>
              {format(new Date(post.created_at), 'dd/MM/yyyy', { locale: ptBR })}
            </TextDate>
          </FooterContainer>
          </>
        )}</>
      )}
    </Container>
  );
};
