import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';

const GeneralInformation = () => {
  const genInfo = [
    {
      title: 'Background',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
    {
      title: 'Collection of your information',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
    {
      title: 'Personal information',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
    {
      title: 'Geo-location information',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
    {
      title: 'Mobile device access',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
    {
      title: 'Push notifications',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
    {
      title: 'Use of your information',
      description:
        'vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam',
    },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#000',
          marginVertical: 10,
          flex: 1,
        }}
      >
        General Information
      </Text>
      <View style={{ flex: 8 }}>
        {genInfo.map((info) => (
          <View key={info.title} style={{ marginTop: 5 }}>
            <Text style={styles.boldText}>{info.title}</Text>
            <Text style={styles.text}>{info.description}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1 }}>
        <Button bgColor="#000" title="Let's get started..." />
      </View>
    </View>
  );
};

export default GeneralInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  boldText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
  text: { color: '#000', fontSize: 14 },
});
