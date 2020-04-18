import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #fff;
  padding-top: 20px;
`;

export const Header = styled.View`
  width: 90%;
  max-width: 325px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const UserInfo = styled.View`
  margin-left: 12px;
`;

export const Welcome = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const UserName = styled.Text`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const Container = styled.View`
  width: 90%;
  max-width: 325px;
  margin-top: 25px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const Filters = styled.View`
  width: 140px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Filter = styled.TouchableOpacity``;

export const FilterText = styled.Text`
  color: ${(props) => (props.active ? '#7d40e7' : '#999')};
  font-size: 13px;
  font-weight: bold;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const DeliveriesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 120 },
})``;
