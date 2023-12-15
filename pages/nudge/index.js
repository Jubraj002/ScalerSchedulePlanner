import React from "react";
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native"

import {styles} from './styles'

function Nudge() {
  const route = useRoute()

  const {
    image,
    problems,
    description,
  } = route.params || {};

  return(
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.imageBlock}>
          <Image
          source={{uri: image}}
          style={styles.backgroundVector}
          />
      </View>
      <View style={styles.descriptionBlock}>
        <Image
          source={require('../../assets/images/personaVectorTwo.png')}
        />
        <Text style={styles.description}>{description}</Text>
      </View>
      {
        problems && (<View style={styles.problemBlock}>
          <Text style={styles.problemTitle}>Problems to solve</Text>
          {
            (problems || []).map((problem) => {
             return (
              <TouchableOpacity style={styles.problem} onPress={() => Linking.openURL(problem.link)}>
                <Text style={styles.problemText}>{problem.title}</Text>
              </TouchableOpacity>
             );
            })
          }
        </View>
        )
      }
      </View>
    </SafeAreaView>
  )
}


export default Nudge;