import { RectButton } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${scale(50)}px;
  background: #694fad;
  border-radius: ${scale(10)}px;
  margin-top: ${scale(8)}px;
  margin-bottom: ${scale(58)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: ${scale(16)}px;
`;
