import { scale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isTextArea: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${props => (props.isTextArea ? scale(250) : scale(50))}px;
  padding: 0 ${scale(12)}px;
  border-radius: ${scale(10)}px;

  border-width: ${scale(2)}px;
  border-color: #e3e3e3;

  flex-direction: row;
  align-items: ${props => (props.isTextArea ? 'flex-start' : 'center')};

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #694fad;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #303030;
  font-size: ${scale(14)}px;
  height: 100%;
`;

export const Icon = styled(MaterialCommunityIcons)<{ isTextArea: boolean }>`
  margin-right: ${scale(16)}px;
  margin-top: ${props => (props.isTextArea ? scale(4) : 0)}px;
`;

export const Wrapper = styled.View`
  height: ${scale(14)}px;
  margin-bottom: ${scale(8)}px;
`;

export const TextError = styled.Text`
  color: #c53030;
  font-size: ${scale(12)}px;
`;
