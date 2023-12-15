import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles'
import {WELCOME_SCREEN_INFORMATION} from '../../utils/persona'

function Persona({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.imageBlock}>
        <Image
          source={require('../../assets/images/personaVector.png')}
          style={styles.backgroundVector}
        />
         <Image
          source={require('../../assets/images/personaLogo.png')}
        />
      </View>
      <View style={styles.descriptionBlock}>
        <Text style={styles.headerDescription}>{WELCOME_SCREEN_INFORMATION.headerDescription}</Text>
        <Text style={styles.headerDescription}>{WELCOME_SCREEN_INFORMATION.headerTitle}</Text>
        <Text style={styles.description}>{WELCOME_SCREEN_INFORMATION.description}</Text>
          <TouchableOpacity
            style={styles.cta}
            onPress={() => navigation.navigate('PersonaForm')}
          > 
            <Text style={styles.ctaText}> Create My Enforcer </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


export default Persona;