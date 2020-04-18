import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  margin: 14px 0;
`;

export const Content = styled.View`
  padding: 15px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background: #f8f9fd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 20px;
  margin: 10px 2px 2px;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 12px;
  font-weight: bold;
`;

export const ValueText = styled.Text`
  color: #444;
  font-size: 14px;
  font-weight: bold;
`;

export const DetailsText = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
`;
