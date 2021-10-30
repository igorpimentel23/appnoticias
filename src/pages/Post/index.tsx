import React, { useCallback, useEffect, useState } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
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
  FooterContainer,
  ButtonsContainer,
  ButtonContainer
} from './styles';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Button from '../../components/Button';

type PostRouteProps = {
  Post: {
    id?: string;
    editedPost?: IPost;
  };
};

export const Post: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<PostRouteProps, 'Post'>>();
  const { id, editedPost } = params;

  const [post, setPost] = useState({} as IPost);
  const [isLoading, setIsloading] = useState(true);

  const handleEdit = useCallback(() => {
    navigation.navigate('Create', {
      post,
    });
  }, [navigation, post])

  const deletePost = useCallback(async () => {
    setIsloading(true);

    try {
      await api.delete(`/news/${id}`);

      navigation.navigate('HomeNavigator');
    } catch (err) {
      console.error(err);
    } finally {
      setIsloading(false);
    }
  }, [navigation, id]);

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

  useEffect(() => {
    if(editedPost) setPost(editedPost);
  }, [editedPost])

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#694fad" />
        </LoadingContainer>
      ) : (
        <>
          {post && (
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
              <ButtonsContainer>
                <ButtonContainer>
                  <Button onPress={handleEdit}>Editar</Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button isDelete onPress={deletePost}>Deletar</Button>
                </ButtonContainer>
              </ButtonsContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
};
