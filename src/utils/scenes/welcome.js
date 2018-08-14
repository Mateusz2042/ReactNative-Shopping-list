import React from 'react';
import { Scene, Stack, Actions } from 'react-native-router-flux';
import { View } from 'react-native';

import Welcome from '../../containers/welcome';
import Shops from '../../containers/shops';
import NewList from '../../containers/newList';
import ProductsChoice from '../../containers/productsChoice';
import Lists from '../../containers/lists';
import ListDetails from '../../containers/lists/listDetails';
import styles from '../../styles/styles';
import BackNavigation from '../../components/backNavigation';
import NextNavigation from '../../components/nextNavigation';
import SaveNavigation from '../../components/saveNavigation';
import EditNavigation from '../../components/editNavigation';
import NavigationTitle from '../../components/navigationTitle';

export default () => (
  <Stack
    key="welcome"
    type="reset"
  >
    <Scene key="welcome" hideNavBar component={Welcome} />
    <Scene
      key="myShops"
      component={Shops}
      navigationBarStyle={styles.navigationBar}
      renderLeftButton={<BackNavigation onPress={() => Actions.pop()} />}
      renderRightButton={<View />}
      renderTitle={<NavigationTitle title="my_shops" />}
    />
    <Scene
      key="newList"
      component={NewList}
      navigationBarStyle={styles.navigationBar}
      renderLeftButton={<BackNavigation onPress={() => Actions.pop()} />}
      renderRightButton={<NextNavigation />}
      renderTitle={<NavigationTitle title="shop_choice" />}
    />
    <Scene
      key="products"
      component={ProductsChoice}
      navigationBarStyle={styles.navigationBar}
      renderLeftButton={<BackNavigation onPress={() => Actions.pop()} />}
      renderRightButton={<SaveNavigation />}
      renderTitle={<NavigationTitle title="products_choice" />}
    />
    <Scene
      key="lists"
      component={Lists}
      navigationBarStyle={styles.navigationBar}
      renderTitle={<NavigationTitle title="shopping_lists" />}
      renderLeftButton={<BackNavigation onPress={() => Actions.pop()} />}
      renderRightButton={<View />}
    />
    <Scene
      key="listDetails"
      component={ListDetails}
      navigationBarStyle={styles.navigationBar}
      renderTitle={<NavigationTitle title="list_details" />}
      renderLeftButton={<BackNavigation onPress={() => Actions.pop()} />}
      renderRightButton={<EditNavigation />}
    />
  </Stack>
);
