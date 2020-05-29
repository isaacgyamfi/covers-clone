/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../../components/Button';

const GettingStarted = ({ navigation }) => {
  const { newUser, setNewUser } = useContext(AuthContext);
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
            <Text style={styles.boldText}>
              (COVID-19 EMERGENCY RESPONSE SOLUTION)
            </Text>
            <Text style={styles.text}>
              Join the effort by well-meaning Africans using technology to slow
              down and eventually halt the spread of COVID-19
            </Text>
          </View>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="#000"
            keyboardType="decimal-pad"
            style={styles.textInput}
            value={newUser.phoneNumber}
            onChangeText={(text) => {
              setNewUser({ phoneNumber: text });
            }}
            maxLength={10}
          ></TextInput>
          {newUser.phoneNumber.length === 10 &&
          newUser.phoneNumber.charAt(0) === '0' ? (
            <Button
              pressHandler={() => navigation.navigate('PinVerification')}
              bgColor="#40CA53"
              title="Get Started"
            />
          ) : (
            <Button bgColor="gray" title="Get Started" />
          )}
          <Text style={styles.boldText}>Beta 0.1.2</Text>
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
  text: { textAlign: 'center', color: '#fff', fontSize: 12 },
  boldText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
