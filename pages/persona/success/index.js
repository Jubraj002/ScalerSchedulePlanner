import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native"

import {styles} from './styles'

function PersonaCreationSuccess({navigation}) {
  const route = useRoute()
  const {
    imageUrl,
    description,
    personaName,
    userName
  } = route.params;
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <Image
            source={require('../../../assets/images/persona.png')}
            style={styles.backgroundVector}
          />
          <View style={styles.heading}>
            <Text style={styles.personaIntro}> Hello {userName}, <Text style={styles.personaName}>{personaName}</Text> here!</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.descriptionBlock}>
            <Image
                source={require('../../../assets/images/personaVectorTwo.png')}
                style={styles.backgroundVector}
            />
            <Text style={styles.description}>{description}</Text>
          </View>
          <TouchableOpacity
            style={styles.cta}
            onPress={() => navigation.navigate('PersonaForm')}
        > 
            <Text style={styles.ctaText}> Let’s Make Your Study Plan </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default PersonaCreationSuccess;