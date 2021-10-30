import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${scale(10)}px;
`;

export const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${scale(16)}px;
  margin-bottom: ${scale(10)}px;
  color: #303030;
  font-weight: 500;
`;

export const TextBody = styled.Text`
  margin-bottom: ${scale(10)}px;
  color: #303030;
`;

export const TextAuthor = styled.Text`
  color: #303030;
`;

export const TextDate = styled.Text`
  color: #303030;
`;

export const TitleContainer = styled.View``;

export const TextContainer = styled.View``;

export const FooterContainer = styled.View``;
