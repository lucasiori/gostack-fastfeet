import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import { Wrapper } from './styles';

export default function Background({ children }) {
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      {children}
    </Wrapper>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
