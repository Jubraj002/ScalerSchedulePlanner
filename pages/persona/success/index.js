import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native"

import {styles} from './styles'
import { fetchPersona } from "../../../api/api";

function PersonaCreationSuccess({navigation}) {
  const route = useRoute()
  const [response, setResponse] = useState({});
  const {
    imageUrl,
    description,
    personaName,
    userName
  } = route.params;

  useEffect(() => {
    let interval;
    console.log("handle ");
    async function fetchData () {
      const apiResponse  = await fetchPersona();
      setResponse(apiResponse);
      if(Object.keys(apiResponse).length === 0){
        interval = setTimeout(fetchData, 15000);
      }
    }
   
    fetchData();
    return  () => clearInterval(interval) 
  }, [])

  if(response === undefined || Object.keys(response).length === 0){
    return (<Text> Is Loading</Text>);
  }
  
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageBlock}>
          <Image
            source={{uri: response.image}}
            style={styles.backgroundVector}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.descriptionBlock}>
            <Image
                source={require('../../../assets/images/personaVectorTwo.png')}
            />
            <Text style={styles.description}>{response.text}</Text>
          </View>
          <TouchableOpacity
            style={styles.cta}
            onPress={() => navigation.navigate('SchedulePlanner')}
        > 
            <Text style={styles.ctaText}> Let’s Make Your Study Plan </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default PersonaCreationSuccess;