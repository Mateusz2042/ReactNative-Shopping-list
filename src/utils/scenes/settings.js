import React from 'react';
import { Scene, Stack, Actions } from 'react-native-router-flux';
import { View } from 'react-native';

import Settings from '../../containers/settings';
import ApplicationLanguage from '../../containers/settings/applicationLanguage';
import styles from '../../styles/styles';
import BackNavigation from '../../components/backNavigation';
import NavigationTitle from '../../components/navigationTitle';

export default () => (
  <Stack
    key="settings"
    type="reset"
  >
    <Scene
      key="settings"
      component={Settings}
      navigationBarStyle={styles.navigationBar}
      renderLeftButton={<BackNavigation onPress={() => Actions.popTo('welcome')} />}
      renderRightButton={<View />}
      renderTitle={<NavigationTitle title="settings" />}
    />
    <Scene
      key="applicationLanguage"
      component={ApplicationLanguage}
      navigationBarStyle={styles.navigationBar}
      renderLeftButton={<BackNavigation onPress={() => Actions.pop()} />}
      renderRightButton={<View />}
      renderTitle={<NavigationTitle title="application_language" />}
    />
  </Stack>
);
