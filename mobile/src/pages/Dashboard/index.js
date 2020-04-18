import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';
import { getStatus } from '~/utils/deliveryStatus';

import Avatar from '~/components/Avatar';
import DeliveryBox from '~/components/DeliveryBox';

import {
  Wrapper,
  Header,
  UserInfo,
  Welcome,
  UserName,
  LogoutButton,
  Container,
  ContainerHeader,
  Title,
  Filters,
  Filter,
  FilterText,
  DeliveriesList,
} from './styles';

export default function Dashboard({ navigation }) {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState([]);
  const [statusFilter, setStatusFilter] = useState('pending');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  async function loadDeliveries(status) {
    setPage(1);
    setStatusFilter(status);

    try {
      const response = await api.get(
        `deliverymen/${profile.id}/deliveries?status=${status}`
      );

      setRefreshing(false);
      setTotalCount(response.headers['x-total-count']);
      setDeliveries(
        response.data.map((delivery) => ({
          ...delivery,
          status: getStatus(delivery.status),
        }))
      );
    } catch (err) {
      setRefreshing(false);
      Alert.alert(
        '',
        err.response && err.response.data
          ? err.response.data.error
          : 'Erro ao buscar entregas'
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadDeliveries('pending');
    }, []) // eslint-disable-line
  );

  async function loadMoreDeliveries() {
    if (page * 10 >= totalCount) return;

    setPage(page + 1);

    try {
      const response = await api.get(
        `deliverymen/${profile.id}/deliveries?page=${
          page + 1
        }&status=${statusFilter}`
      );

      setDeliveries([
        ...deliveries,
        ...response.data.map((delivery) => ({
          ...delivery,
          status: getStatus(delivery.status),
        })),
      ]);
    } catch (err) {
      Alert.alert(
        '',
        err.response && err.response.data
          ? err.response.data.error
          : 'Erro ao buscar entregas'
      );
    }
  }

  function refreshList() {
    setRefreshing(true);
    loadDeliveries(statusFilter);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <Header>
        <Avatar size="small" />

        <UserInfo>
          <Welcome>Bem vindo de volta,</Welcome>
          <UserName>{profile.name}</UserName>
        </UserInfo>

        <LogoutButton onPress={handleSignOut}>
          <Icon name="exit-to-app" color="#E74040" size={24} />
        </LogoutButton>
      </Header>

      <Container>
        <ContainerHeader>
          <Title>Entregas</Title>

          <Filters>
            <Filter onPress={() => loadDeliveries('pending')}>
              <FilterText active={statusFilter === 'pending'}>
                Pendentes
              </FilterText>
            </Filter>

            <Filter onPress={() => loadDeliveries('finalized')}>
              <FilterText active={statusFilter === 'finalized'}>
                Entregues
              </FilterText>
            </Filter>
          </Filters>
        </ContainerHeader>

        <DeliveriesList
          data={deliveries}
          keyExtractor={(delivery) => String(delivery.id)}
          onEndReachedThreshold={0.2}
          onEndReached={loadMoreDeliveries}
          onRefresh={refreshList}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <DeliveryBox
              delivery={item}
              onDetails={() =>
                navigation.navigate('DeliveryDetails', { delivery_id: item.id })
              }
            />
          )}
        />
      </Container>
    </Wrapper>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
