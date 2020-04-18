import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 90%;
  max-width: 335px;
  margin: 0 auto 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})``;

export const ProblemBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
  padding: 17px;
  margin-bottom: 15px;
`;

export const ProblemDescription = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;
  color: #999;
  font-size: 16px;
  margin-right: 10px;
`;

export const ProblemDate = styled.Text`
  color: #c1c1c1;
  font-size: 14px;
`;
