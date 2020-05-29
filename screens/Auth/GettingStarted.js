/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const GettingStarted = ({ navigation }) => {
  const [userPhone, setUserPhone] = useState('');
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/getting-started-bg.png')}
        style={styles.bgImage}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ marginBottom: 30 }}>
            <Text
              style={{
                fontSize: 70,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              COVERS
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              (COVID-19 EMERGENCY RESPONSE SOLUTION)
            </Text>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 12 }}>
              Join the effort by well-meaning Africans using technology to slow
              down and eventually halt the spread of COVID-19
            </Text>
          </View>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="#000"
            keyboardType="decimal-pad"
            style={styles.textInput}
            value={userPhone}
            onChangeText={(text) => {
              setUserPhone(text);
            }}
            maxLength={10}
          ></TextInput>
          {userPhone.length === 10 && userPhone.charAt(0) === '0' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('PinVerification')}
              style={[styles.btn, { backgroundColor: '#40CA53' }]}
            >
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[styles.btn, { backgroundColor: 'gray' }]}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    paddingHorizontal: 20,
    height: '100%',
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    fontSize: 12,
  },
  btn: {
    paddingVertical: 15,
    width: '100%',
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
});
