import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Button from '~/components/Button';

import {
  Wrapper,
  Container,
  Preview,
  Camera,
  ButtonBox,
  ActionButton,
} from './styles';

export default function FinishDelivery({ route, navigation }) {
  const { delivery_id } = route.params;

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [refCamera, setRefCamera] = useState(null);

  async function handleTakePicture() {
    if (!refCamera) {
      Alert.alert('', 'Erro ao capturar foto');
      return;
    }

    try {
      const { uri } = await refCamera.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      const formData = new FormData();

      formData.append('file', {
        uri,
        type: 'image/jpeg',
        name: 'signature.jpg',
      });

      const response = await api.post('files', formData);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      Alert.alert(
        '',
        err.response && err.response.data
          ? err.response.data.error
          : 'Erro ao realizar upload da foto'
      );
    }
  }

  async function handleSubmit() {
    if (!file) {
      Alert.alert('', 'Por favor registre a assinatura do destinatário');
      return;
    }

    try {
      await api.put(`deliveries/${delivery_id}/finish`, {
        signature_id: file,
      });

      Alert.alert('', 'Entrega finalizada com sucesso', [
        { text: 'OK', onPress: navigation.goBack },
      ]);
    } catch (err) {
      Alert.alert(
        err.response && err.response.data
          ? err.response.data.error
          : 'Erro ao finalizar entrega'
      );
    }
  }

  return (
    <Background>
      <Wrapper>
        <Container>
          {preview && (
            <>
              <Preview source={{ uri: preview }} />
              <ButtonBox>
                <ActionButton onPress={() => setPreview(null)}>
                  <Icon name="cancel" color="#fff" size={28} />
                </ActionButton>
              </ButtonBox>
            </>
          )}

          {!preview && (
            <>
              <Camera
                ref={(ref) => setRefCamera(ref)}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                captureAudio={false}
                androidCameraPermissionOptions={{
                  title: 'Permissões de câmera',
                  message: 'Permitir FastFeet acessar a câmera',
                  buttonPositive: 'Permitir',
                  buttonNegative: 'Cancelar',
                }}
              />

              <ButtonBox>
                <ActionButton onPress={handleTakePicture}>
                  <Icon name="photo-camera" color="#fff" size={28} />
                </ActionButton>
              </ButtonBox>
            </>
          )}
        </Container>

        <Button background="#7d40e7" text="Enviar" onPress={handleSubmit} />
      </Wrapper>
    </Background>
  );
}

FinishDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
