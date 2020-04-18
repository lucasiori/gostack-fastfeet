import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Wrapper, Container, FormInput } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  function handleSubmit() {
    if (!id) {
      Alert.alert('', 'Por favor informe o ID de cadastro');
    }

    dispatch(signInRequest(id));
  }

  return (
    <Wrapper>
      <Container>
        <Image source={logo} />
        <FormInput
          keyboardType="number-pad"
          placeholder="Informe seu ID de cadastro"
          placeholderTextColor="#999"
          value={id}
          onChangeText={setId}
        />
        <Button
          background="#82BF18"
          text="Entrar no sistema"
          onPress={handleSubmit}
        />
      </Container>
    </Wrapper>
  );
}
