import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export default function ScheduleSuccess() {
  return (
    <View style={styles.container}>
      <View style={styles.successData}>
        <Image
          source={require('../../../assets/images/successLogo.png')}
          style={styles.successLogo}
        />
        <Text style={styles.title}>Congratulations</Text>
        <Text style={styles.description}>Your are all set!</Text>
      </View>
      <TouchableOpacity
        style={styles.cta}
        onPress={() => navigation.navigate('PersonaForm')}
      > 
        <Text style={styles.ctaText}> Got It ! </Text>
      </TouchableOpacity>
    </View>
  );
}