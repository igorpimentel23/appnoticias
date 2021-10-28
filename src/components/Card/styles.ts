import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #e3e3e3;
  border-radius: ${scale(8)}px;
  padding: ${scale(8)}px;
  box-shadow: ${scale(2)}px ${scale(2)}px ${scale(4)}px rgba(0, 0, 0, 0.25);
  elevation: 4;
  margin-bottom: ${scale(10)}px;
`;

export const Title = styled.Text``;

export const TextBody = styled.Text``;

export const TextAuthor = styled.Text``;

export const TextDate = styled.Text``;
