import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';

import {
  Container,
  Title,
  ProblemsList,
  ProblemBox,
  ProblemDescription,
  ProblemDate,
} from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
  },
});

export default function DeliveryProblems({ route }) {
  const { delivery_id } = route.params;

  const [problems, setProblems] = useState([]);

  useFocusEffect(
    useCallback(() => {
      async function loadProblems() {
        try {
          const response = await api.get(`deliveries/${delivery_id}/problems`);

          setProblems(response.data);
        } catch (err) {
          Alert.alert(
            '',
            err.response && err.response.data
              ? err.response.data.error
              : 'Erro ao buscar problemas nas entregas'
          );
        }
      }

      loadProblems();
    }, [delivery_id])
  );

  function handleShowDetails(description) {
    Alert.alert('Descrição do problema', description);
  }

  return (
    <Background>
      <Container>
        <Title>Encomenda {delivery_id.toString().padStart(2, '0')}</Title>

        <ProblemsList
          data={problems}
          keyExtractor={(problem) => String(problem.id)}
          renderItem={({ item }) => (
            <ProblemBox
              style={styles.boxShadow}
              onPress={() => handleShowDetails(item.description)}
            >
              <ProblemDescription>{item.description}</ProblemDescription>
              <ProblemDate>
                {format(parseISO(item.created_at), 'dd/MM/yyyy', {
                  locale: pt,
                })}
              </ProblemDate>
            </ProblemBox>
          )}
        />
      </Container>
    </Background>
  );
}

DeliveryProblems.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};
