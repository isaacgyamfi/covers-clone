import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';

const GettingStarted = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/getting-started-bg.png')}
        style={styles.bgImage}
      >
        <View>
          <TextInput style={styles.textInput}></TextInput>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  container: {},
  bgImage: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textInput: {
    height: 100,
  },
});
