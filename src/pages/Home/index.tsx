import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Alert, FlatList } from 'react-native';

import { Card } from '../../components/Card';
import { api } from '../../services/api';

import { Container,
  Title,
  FooterContainer,
  Icon,
  LoadingContainer
} from './styles';

export interface IPost {
  id: string;
  title: string;
  text: string;
  author: string;
  date: string;
  created_at: string;
}

export const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState<number>();
  const [posts, setPosts] = useState([] as IPost[]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const getPosts = useCallback(async () => {
    if (!totalPages || page <= totalPages) {
      setIsLoading(true);

      try {
        const { data } = await api.get('/news', {
          params: {
            page,
            limit,
            sortBy: 'created_at',
            order: 'desc'
          },
        });

        const { items, count } = data;

        if (!totalPages) setTotalPages(Math.ceil(count / limit))

        setPosts([...posts, ...items]);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  }, [page]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setPage(1);
      setPosts([]);
      getPosts();
    });
  }, [navigation]);

  useEffect(() => {
    getPosts();
  }, [page]);

  return (
    <>
      <Container>
        <Title><Icon name="newspaper"/> Notícias</Title>
      </Container>
      {page === 1 && isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color="#694fad" size='large' />
        </LoadingContainer>
      ) : (
        <FlatList
        data={posts}
        keyExtractor={key => key.id}
        renderItem={({ item }) => <Card post={item} />}
        onEndReached={() => setPage(page + 1)}
        ListFooterComponent={() => (
          <>
            {isLoading && (
              <FooterContainer>
                <ActivityIndicator color="#303030" />
              </FooterContainer>
            )}
          </>
        )}
        ListEmptyComponent={() => (
          <Title>Nenhuma notícia encontrada</Title>
        )}
        showsVerticalScrollIndicator={false}
      />
      )}
    </>
  );
};
