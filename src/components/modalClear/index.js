import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import styles from './styles';
import Container from '../container';
import Button from '../button';
import { translate } from '../../utils/translation';

const ModalClear = props => (
  <Modal
    isVisible={props.isVisibleModal}
  >
    <View style={styles.container}>
      <Container>
        <Text style={styles.textError}>
          {translate('cancel_question')}
        </Text>
        <View style={styles.view}>
          <Button
            titleStyle={styles.titleStyle}
            style={styles.yesSubmitButton}
            onPress={props.onPressYes}
            title={translate('yes')}
          />
          <Button
            titleStyle={styles.titleStyle}
            style={styles.noSubmitButton}
            onPress={props.onPressNo}
            title={translate('no')}
          />
        </View>
      </Container>
    </View>
  </Modal>
);

ModalClear.propTypes = {
  isVisibleModal: PropTypes.bool.isRequired,
  onPressYes: PropTypes.bool.isRequired,
  onPressNo: PropTypes.bool.isRequired,
};

export default ModalClear;
