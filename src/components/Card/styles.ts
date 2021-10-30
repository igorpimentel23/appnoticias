import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border: 1px solid #e3e3e3;
  border-radius: ${scale(8)}px;
  padding: ${scale(8)}px;
  box-shadow: ${scale(0)}px ${scale(2)}px ${scale(4)}px rgba(0, 0, 0, 0.25);
  margin: ${scale(5)}px ${scale(10)}px;
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
