import React, { useCallback, useRef, useState } from 'react';

import { FieldError } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon, Wrapper, TextError } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  containerStyle?: object;
  filled?: boolean;
  focused?: boolean;
  error?: FieldError | undefined;
  type?: 'input' | 'area';
  ref?: any | null;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

export const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  icon,
  filled = false,
  focused = false,
  error,
  type = 'input',
  ref,
  ...rest
}) => {
  const inputElementRef = useRef<any>(ref);
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <>
      <Container
        isTextArea={type === 'area'}
        isFocused={focused || isFocused}
        isErrored={!!error}
      >
        <Icon
          isTextArea={type === 'area'}
          name={icon}
          size={20}
          color={
            focused || isFocused || filled || isFilled ? '#694fad' : '#666360'
          }
        />
        <TextInput
          isTextArea={type === 'area'}
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#666060"
          defaultValue=""
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          multiline={type === 'area'}
          numberOfLines={type === 'area' ? 14 : 1}
          {...rest}
        />
      </Container>
      <Wrapper>{error && <TextError>{error.message}</TextError>}</Wrapper>
    </>
  );
};
