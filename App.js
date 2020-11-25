/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.mainView}>
      <View>
        <Image
            style={styles.image}
            source={require('./assets/logo.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>Tomilov Fedor</Text>
      </View>
      <View>
        <Text style={styles.emoji}>😳</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    marginTop: 87,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'RobotoLight'
  },

  mainView: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 80,
    marginBottom: 24,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginLeft: 100
  },

  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginTop: 87
  },

});

export default App;
