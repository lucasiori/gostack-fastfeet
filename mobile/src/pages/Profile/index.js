import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { signOut } from '~/store/modules/auth/actions';

import {
  Wrapper,
  Container,
  ProfileAvatar,
  Group,
  Label,
  ValueText,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <Container>
        <ProfileAvatar size="big" />

        <Group>
          <Label>Nome completo</Label>
          <ValueText>{profile.name}</ValueText>
        </Group>

        <Group>
          <Label>Email</Label>
          <ValueText>{profile.email}</ValueText>
        </Group>

        <Group>
          <Label>Data de cadastro</Label>
          <ValueText>
            {format(parseISO(profile.created_at), 'dd/MM/yyyy', { locale: pt })}
          </ValueText>
        </Group>

        <LogoutButton
          background="#E74040"
          text="Logout"
          onPress={handleSignOut}
        />
      </Container>
    </Wrapper>
  );
}
