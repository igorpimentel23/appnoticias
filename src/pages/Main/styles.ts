import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${scale(10)}px;
`;

export const Title = styled.Text`
  font-size: ${scale(18)}px;
  margin: ${scale(10)}px 0;
`;

export const FooterContainer = styled.View``;
