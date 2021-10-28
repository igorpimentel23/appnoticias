import React, { useCallback, useEffect, useState } from 'react';

import { ActivityIndicator, FlatList } from 'react-native';

import { Card } from '../../components/Card';
import { api } from '../../services/api';

import { Container, Title, FooterContainer } from './styles';

export interface IPost {
  id: string;
  title: string;
  text: string;
  author: string;
  date: string;
  created_at: string;
}

export const Main: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState<number>();
  const [posts, setPosts] = useState([] as IPost[]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = useCallback(async () => {
    if(!totalPages || page <= totalPages) {
      setIsLoading(true);

      try {
        const { data } = await api.get('/news', {
          params: {
            page,
            limit,
          },
        });

        const { items, count } = data;

        if (!totalPages) setTotalPages(Math.ceil(count / limit))

        setPosts([...posts, ...items]);
      } catch(err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
  }, [page]);

  useEffect(() => {
    getPosts()
  },[page]);

  return (
    <Container>
      <Title>Notícias</Title>
      <FlatList
        data={posts}
        keyExtractor={key => key.id}
        renderItem={({ item }) => <Card post={item} />}
        onEndReached={() => setPage(page + 1)}
        ListFooterComponent={() => (
          <>
            {isLoading && (
              <FooterContainer>
                <ActivityIndicator />
              </FooterContainer>
            )}
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
