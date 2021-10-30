import { scale } from 'react-native-size-matters';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${scale(10)}px;
`;

export const Title = styled.Text`
  font-size: ${scale(21)}px;
  margin: ${scale(10)}px 0 ${scale(15)}px;
  color: #303030;
`;

export const Icon = styled(MaterialCommunityIcon).attrs({
  size: scale(21),
})``;
