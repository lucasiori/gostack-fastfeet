import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  width: 90%;
  max-width: 335px;
  margin: 0 auto;
`;

export const Box = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 15px 15px 5px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #7d40e7;
  font-size: 15px;
  margin-left: 5px;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const ValueText = styled.Text`
  color: #666;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const ViewGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 33%;
  align-items: center;
  background: #f8f9fd;
  border-radius: 4px;
  padding: 15px 20px;
  margin: 0 0.15%;

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const ButtonText = styled.Text`
  color: #999;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
`;
