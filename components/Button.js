import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ pressHandler, bgColor, title }) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[styles.btn, { backgroundColor: bgColor }]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 15,
    width: '100%',
    marginVertical: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
});
