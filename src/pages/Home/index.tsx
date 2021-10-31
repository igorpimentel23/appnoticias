import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { ActivityIndicator, FlatList } from 'react-native';
import { debounce } from 'lodash';

import { Card } from '../../components/Card';
import { api } from '../../services/api';

import { Container,
  Title,
  FooterContainer,
  Icon,
  LoadingContainer,
  SearchContainer
} from './styles';
import { Input } from '../../components/Input';

export interface IPost {
  id: string;
  title: string;
  text: string;
  author: string;
  date: string;
  created_at: string;
};

interface IParams {
  page: number;
  limit: number;
  sortBy: string;
  order: string;
  search?: string;
}

export const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState<number>();
  const [posts, setPosts] = useState([] as IPost[]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const flatListRef = useRef<FlatList<IPost>>(null);

  useScrollToTop(flatListRef);

  const navigation = useNavigation();

  const getPosts = useCallback(async (searchText?: string) => {
    if (!totalPages || page <= totalPages) {
      setIsLoading(true);
      const serachParam = searchText ?? search;

      try {
        let params = {
          page,
          limit,
          sortBy: 'created_at',
          order: 'desc'
        } as IParams;

        if(serachParam) {
          params = {
            ...params,
            search: serachParam
          }
        };

        const { data } = await api.get('/news', {
          params,
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
  }, [page, search]);

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
    setPage(1);
    setPosts([]);
    getPosts(text);
  }, []);

  const handleDelayedSearch = useCallback(debounce(
    (text: string) => {
      if(text.length >= 3 || text.length === 0) handleSearch(text);
    }, 1000
  ), [])

  useEffect(() => {
    navigation.addListener('focus', () => {
      setPage(1);
      setPosts([]);
      getPosts();
    });
  }, [navigation]);

  useEffect(() => {
    if(posts?.length > 0) getPosts();
  }, [page]);

  return (
    <>
      <Container>
        <Title><Icon name="newspaper"/> Notícias</Title>
        <SearchContainer>
          <Input icon="text-box-search-outline" onChangeText={handleDelayedSearch} />
        </SearchContainer>
      </Container>
      {page === 1 && isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color="#694fad" size='large' />
        </LoadingContainer>
      ) : (
        <FlatList
        ref={flatListRef}
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
