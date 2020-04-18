import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { getStatus } from '~/utils/deliveryStatus';
import { formatZipCode } from '~/utils/format';

import Background from '~/components/Background';

import {
  Container,
  Box,
  Header,
  Title,
  Label,
  ValueText,
  ViewGroup,
  ButtonGroup,
  Button,
  ButtonText,
} from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
  },
});

export default function DeliveryDetails({ route, navigation }) {
  const [delivery, setDelivery] = useState(undefined);

  const { delivery_id } = route.params;

  useFocusEffect(
    useCallback(() => {
      async function loadDelivery() {
        try {
          const response = await api.get(`deliveries/${delivery_id}`);

          setDelivery({
            ...response.data,
            status: getStatus(response.data.status),
          });
        } catch (err) {
          Alert.alert(
            '',
            err.response && err.response.data
              ? err.response.data.error
              : 'Erro ao buscar entrega'
          );
        }
      }

      loadDelivery();
    }, [delivery_id])
  );

  async function handleStartDelivery() {
    try {
      const response = await api.put(`deliveries/${delivery_id}/start`);

      setDelivery({
        ...delivery,
        start_date: response.data.start_date,
        status: getStatus('started'),
      });

      Alert.alert('', 'Entrega iniciada com sucesso');
    } catch (err) {
      Alert.alert(
        '',
        err.response && err.response.data
          ? err.response.data.error
          : 'Erro ao iniciar entrega'
      );
    }
  }

  if (!delivery) return <></>;

  return (
    <Background>
      <Container>
        <Box style={styles.boxShadow}>
          <Header>
            <Icon name="local-shipping" color="#7d40e7" size={24} />
            <Title>Informações da entrega</Title>
          </Header>

          <View>
            <Label>DESTINATÁRIO</Label>
            <ValueText>{delivery.recipient.name}</ValueText>
          </View>

          <View>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <ValueText>
              {`${delivery.recipient.address}, ${
                delivery.recipient.address_number
              }, ${delivery.recipient.city} - ${
                delivery.recipient.state
              }, ${formatZipCode(delivery.recipient.zip_code)}`}
            </ValueText>
          </View>

          <View>
            <Label>PRODUTO</Label>
            <ValueText>{delivery.product}</ValueText>
          </View>
        </Box>

        <Box style={styles.boxShadow}>
          <Header>
            <Icon name="event" color="#7d40e7" size={24} />
            <Title>Situação da entrega</Title>
          </Header>

          <View>
            <Label>STATUS</Label>
            <ValueText>{delivery.status.description}</ValueText>
          </View>

          <ViewGroup>
            <View>
              <Label>DATA DE RETIRADA</Label>
              <ValueText>
                {delivery.start_date
                  ? format(parseISO(delivery.start_date), 'dd/MM/yyyy', {
                      locale: pt,
                    })
                  : '--/--/----'}
              </ValueText>
            </View>

            <View>
              <Label>DATA DE ENTREGA</Label>
              <ValueText>
                {delivery.end_date
                  ? format(parseISO(delivery.end_date), 'dd/MM/yyyy', {
                      locale: pt,
                    })
                  : '--/--/----'}
              </ValueText>
            </View>
          </ViewGroup>
        </Box>

        <ButtonGroup>
          {delivery.status.status === 'pending' && (
            <Button style={styles.boxShadow} onPress={handleStartDelivery}>
              <Icon name="input" color="#00cc00" size={24} />
              <ButtonText>Iniciar Entrega</ButtonText>
            </Button>
          )}

          {delivery.status.status !== 'pending' && (
            <>
              <Button
                style={styles.boxShadow}
                disabled={delivery.status.status === 'finalized'}
                onPress={() =>
                  navigation.navigate('NewProblem', {
                    delivery_id: delivery.id,
                  })
                }
              >
                <Icon name="highlight-off" color="#e74040" size={24} />
                <ButtonText>Informar Problema</ButtonText>
              </Button>

              <Button
                style={styles.boxShadow}
                onPress={() =>
                  navigation.navigate('DeliveryProblems', {
                    delivery_id: delivery.id,
                  })
                }
              >
                <Icon name="info-outline" color="#e7ba40" size={24} />
                <ButtonText>Visualizar Problemas</ButtonText>
              </Button>
              <Button
                style={styles.boxShadow}
                disabled={delivery.status.status !== 'started'}
                onPress={() =>
                  navigation.navigate('FinishDelivery', {
                    delivery_id: delivery.id,
                  })
                }
              >
                <Icon name="alarm-on" color="#7d40e7" size={24} />
                <ButtonText>Confirmar Entrega</ButtonText>
              </Button>
            </>
          )}
        </ButtonGroup>
      </Container>
    </Background>
  );
}

DeliveryDetails.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
