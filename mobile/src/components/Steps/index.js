import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { statusList } from '~/utils/deliveryStatus';

import {
  Container,
  Step,
  StepIndicator,
  StepLabel,
  LineView,
  Line,
} from './styles';

export default function Steps({ deliveryStatus }) {
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    setCurrent(statusList.findIndex((s) => s.status === deliveryStatus.status));
  }, [deliveryStatus]);

  return (
    <Container>
      <Step>
        <StepIndicator completed={current >= 0} />
        <StepLabel>{statusList[0].description}</StepLabel>
      </Step>

      <Step>
        <StepIndicator completed={current >= 1} />
        <StepLabel>{statusList[1].description}</StepLabel>
      </Step>

      <Step>
        <StepIndicator completed={current === 2} />
        <StepLabel>{statusList[2].description}</StepLabel>
      </Step>

      <LineView>
        <Line />
      </LineView>
    </Container>
  );
}

Steps.propTypes = {
  deliveryStatus: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};
