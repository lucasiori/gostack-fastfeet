import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['#7d40e7', '#fff'],
  locations: [0.35, 0.35],
})`
  flex: 1;
  padding-top: 80px;
`;
