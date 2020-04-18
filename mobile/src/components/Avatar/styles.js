import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: ${(props) => (props.size === 'big' ? '135px' : '60px')};
  height: ${(props) => (props.size === 'big' ? '135px' : '60px')};
  border-radius: ${(props) => (props.size === 'big' ? '77.5px' : '30px')};
`;

export const DefaultAvatar = styled.View`
  width: ${(props) => (props.size === 'big' ? '135px' : '60px')};
  height: ${(props) => (props.size === 'big' ? '135px' : '60px')};
  background: ${(props) => props.background};
  border-radius: ${(props) => (props.size === 'big' ? '77.5px' : '30px')};
`;

export const AvatarText = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size === 'big' ? '60px' : '30px')};
`;
