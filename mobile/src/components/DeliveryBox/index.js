import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Steps from '../Steps';

import {
  Container,
  Content,
  ContentHeader,
  Title,
  Footer,
  Label,
  ValueText,
  DetailsText,
} from './styles';

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1.5,
  },
});

export default function DeliveryBox({ delivery, onDetails }) {
  return (
    <Container style={styles.boxShadow}>
      <Content>
        <ContentHeader>
          <Icon name="local-shipping" color="#7d40e7" size={24} />
          <Title>Encomenda {delivery.id.toString().padStart(2, '0')}</Title>
        </ContentHeader>

        <Steps deliveryStatus={delivery.status} />
      </Content>

      <Footer>
        <View>
          <Label>Data</Label>
          <ValueText>
            {format(parseISO(delivery.created_at), 'dd/MM/yyyy', {
              locale: pt,
            })}
          </ValueText>
        </View>

        <View>
          <Label>Cidade</Label>
          <ValueText>{delivery.recipient.city}</ValueText>
        </View>

        <View>
          <TouchableOpacity onPress={onDetails}>
            <DetailsText>Ver detalhes</DetailsText>
          </TouchableOpacity>
        </View>
      </Footer>
    </Container>
  );
}

DeliveryBox.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    recipient: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
    end_date: PropTypes.string,
    start_date: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    status: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onDetails: PropTypes.func.isRequired,
};
