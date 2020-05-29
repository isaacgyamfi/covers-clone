import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { Entypo } from '@expo/vector-icons';
import Button from '../../components/Button';

const PinVerification = ({ navigation }) => {
  const { newUser, setNewUser } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ paddingVertical: 10 }}
        onPress={() => navigation.goBack()}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo name="chevron-left" size={22} />
          <Text>Change phone</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: 25,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text style={[styles.boldText, { marginBottom: 20 }]}>
          Verification PIN
        </Text>
        <Text style={styles.text}>
          Enter the Verification code{'\n'}we just sent you on {'\n'}
          {newUser.phoneNumber}
        </Text>
        <TextInput style={styles.textInput}></TextInput>
        <View style={{ marginVertical: 20 }}>
          <Button
            bgColor="#000"
            title="Submit code"
            pressHandler={() => navigation.navigate('GeneralInformation')}
          />
        </View>
        <Text style={styles.text}>Have not received your code?</Text>
        <TouchableOpacity style={{ alignSelf: 'center', paddingVertical: 10 }}>
          <Text style={styles.text}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PinVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  text: { textAlign: 'center', color: '#000', fontSize: 12 },
  textInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    textAlign: 'center',
    paddingVertical: 5,
    marginTop: 20,
    fontSize: 14,
  },
  boldText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
