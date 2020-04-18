import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

export default function Button({ background, text, onPress, ...rest }) {
  return (
    <Container {...rest} background={background} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}

Button.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  background: '#7d40e7',
};
