import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Wrapper = styled.SafeAreaView`
  width: 90%;
  max-width: 335px;
  flex: 1;
  margin: 0 auto 20px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Preview = styled.Image`
  flex: 1;
  background: #000;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  overflow: hidden;
`;

export const ButtonBox = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  z-index: 999;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 61px;
  height: 61px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 30.5px;
`;
