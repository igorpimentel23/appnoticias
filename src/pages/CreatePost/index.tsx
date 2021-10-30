import React, { useCallback, useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { Container, Title, Icon, Wrapper } from './styles';
import { scale } from 'react-native-size-matters';

type IInputs = {
  title: string;
  text: string;
  author: string;
};

const fieldValidationSchema = yup.object().shape({
  title: yup.string().required('O título não pode ser vazio'),
  text: yup.string().required('O texto não pode ser vazio'),
  author: yup.string().required('O nome do autor não pode ser vazio'),
});

export const CreatePost: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<IInputs>({
    resolver: yupResolver(fieldValidationSchema),
  });
  const navigation = useNavigation();

  const [titleVal, setTitleVal] = useState('');
  const [textVal, setTextVal] = useState('');
  const [authorVal, setAuthorVal] = useState('');

  const handleSubmitForm = useCallback(
    async ({ title, text, author }: IInputs) => {
      try {
        const { data } = await api.post('/news', {
          title,
          text,
          author,
          created_at: Date.now(),
        });

        reset({
          title: '',
          text: '',
          author: '',
        });

        setTitleVal('');
        setTextVal('');
        setAuthorVal('');

        navigation.navigate('Home');
      } catch (error) {
        console.error(error)
      }
    },
    [],
  );

  const onSubmit: SubmitHandler<IInputs> = data => handleSubmitForm(data);

  useEffect(() => {
    register('title');
    register('text');
    register('author');
  }, [register]);

  return (
    <Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Wrapper showsVerticalScrollIndicator={false}>
        <Title>
          <Icon name="file-document-edit-outline" /> Criar notícia
        </Title>
        <Input
          value={titleVal}
          icon="format-title"
          placeholder="Digite o título da notícia"
          onChangeText={text => {
            setValue('title', text);
            setTitleVal(text);
          }}
          error={errors?.title}
          returnKeyType="next"
        />
        <Input
          value={textVal}
          type="area"
          icon="form-textarea"
          placeholder="Digite o texto"
          onChangeText={text => {
            setValue('text', text);
            setTextVal(text);
          }}
          error={errors?.text}
          returnKeyType="default"
        />
        <Input
          value={authorVal}
          icon="account"
          placeholder="Digite o nome do autor"
          onChangeText={text => {
            setValue('author', text);
            setAuthorVal(text);
          }}
          error={errors?.author}
          returnKeyType="send"
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <Button disabled={isSubmitting} onPress={handleSubmit(onSubmit)}>
          Enviar
        </Button>
      </Wrapper>
    </Container>
  );
};
