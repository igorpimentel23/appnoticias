import { scale } from 'react-native-size-matters';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${scale(10)}px;
  border-bottom-width: ${scale(1)}px;
  border-bottom-style: solid;
  border-bottom-color: #e3e3e3;
  box-shadow: ${scale(2)}px ${scale(2)}px ${scale(4)}px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.Text`
  font-size: ${scale(21)}px;
  margin: ${scale(10)}px 0;
  color: #303030;
`;

export const FooterContainer = styled.View`
  margin: ${scale(21)}px;
`;

export const Icon = styled(MaterialCommunityIcon).attrs({
  size: scale(21),
})``;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
