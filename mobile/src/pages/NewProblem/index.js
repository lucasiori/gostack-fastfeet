import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Alert } from 'react-native';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';

import { Container, TextArea } from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
  },
});

export default function NewProblem({ route, navigation }) {
  const { delivery_id } = route.params;

  const [problem, setProblem] = useState('');

  async function handleSubmit() {
    if (!problem) {
      Alert.alert('', 'Por favor informe a descrição do problema');
      return;
    }

    try {
      await api.post(`problems`, {
        delivery_id,
        description: problem,
      });

      setProblem('');
      Alert.alert('', 'Problema na entrega cadastrado com sucesso', [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('DeliveryProblems', { delivery_id }),
        },
      ]);
    } catch (err) {
      Alert.alert(
        '',
        err.response && err.response.data
          ? err.response.data.error
          : 'Erro ao cadastrar problema na entrega'
      );
    }
  }

  return (
    <Background>
      <Container>
        <TextArea
          style={styles.boxShadow}
          multiline
          numberOfLines={12}
          maxLength={500}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          placeholderTextColor="#999"
          textAlignVertical="top"
          value={problem}
          onChangeText={setProblem}
        />

        <Button background="#7d40e7" text="Enviar" onPress={handleSubmit} />
      </Container>
    </Background>
  );
}

NewProblem.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
