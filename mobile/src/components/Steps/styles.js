import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 90%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Step = styled.View`
  width: 70px;
  align-items: center;
  justify-content: flex-start;
`;

export const StepIndicator = styled.View`
  width: 15px;
  height: 15px;
  border: 2px solid #7d40e7;
  border-radius: 7.5px;
  background: ${(props) => (props.completed ? '#7d40e7' : '#fff')};
`;

export const StepLabel = styled.Text`
  color: #999;
  font-size: 11px;
  text-align: center;
  margin-top: 5px;
`;

export const LineView = styled.View`
  position: absolute;
  width: 100%;
  top: 7px;
`;

export const Line = styled.View`
  width: 77%;
  height: 2px;
  background: #7d40e7;
  margin: 0 auto;
  z-index: -1;
`;
