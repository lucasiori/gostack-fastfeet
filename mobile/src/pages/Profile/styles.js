import styled from 'styled-components/native';

import Button from '~/components/Button';
import Avatar from '~/components/Avatar';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #fff;
  padding: 45px 0 30px;
`;

export const Container = styled.View`
  width: 90%;
  max-width: 305px;
`;

export const ProfileAvatar = styled(Avatar)`
  margin-bottom: 45px;
`;

export const Group = styled.View`
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const ValueText = styled.Text`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
`;
