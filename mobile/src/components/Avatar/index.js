import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import generateRandomColor from '~/utils/generateRandomColor';

import { Container, AvatarImage, DefaultAvatar, AvatarText } from './styles';

export default function Avatar({ size, ...rest }) {
  const { name, avatar } = useSelector((state) => state.user.profile);

  const [avatarText, setAvatarText] = useState('');
  const [colors, setColors] = useState({});

  useEffect(() => {
    if (name) {
      const arrText = name.split(' ');

      setAvatarText(
        `${arrText[0].charAt(0).toUpperCase()}${
          arrText[1] ? arrText[1].charAt(0).toUpperCase() : ''
        }`
      );
    }

    setColors(generateRandomColor());
  }, [name]);

  return (
    <Container {...rest}>
      {avatar && <AvatarImage source={{ uri: avatar.url }} size={size} />}

      {!avatar && (
        <DefaultAvatar
          {...rest}
          background={colors.background || '#a28fd0'}
          size={size}
        >
          <AvatarText color={colors.labelColor || '#f4effc'} size={size}>
            {avatarText}
          </AvatarText>
        </DefaultAvatar>
      )}
    </Container>
  );
}

Avatar.propTypes = {
  size: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'small',
};
