import React from 'react';

import { ActivityIndicator } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  isLoading?: boolean;
  isDelete?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  isDelete = false,
  ...rest
}) => (
  <Container enabled={!isLoading} isDelete={isDelete} {...rest}>
    {!isLoading ? (
      <ButtonText>{children}</ButtonText>
    ) : (
      <ActivityIndicator color="#fff" />
    )}
  </Container>
);

export default Button;
