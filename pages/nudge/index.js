import React, { useEffect, useState } from "react";
import {View, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native"

import {styles} from './styles'
import { getNudgeScreenData } from "../../api/api";

function Nudge({navigation}) {
  const route = useRoute()
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  async function fetchData() {
    try {
        setIsLoading(true);
        const response = await getNudgeScreenData();
        setData(response);
        setIsLoading(false);

    } catch (error){
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(isLoading){
    return (
      <View style={styles.container}>
        <Text>Data is loading</Text>
      </View>
    )
  }
  else {
    return(
      <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.imageBlock}>
            <Image
            source={require('../../assets/images/persona.png')}
            style={styles.backgroundVector}
            />
        </View>
        <View style={styles.descriptionBlock}>
            <Image
            source={require('../../assets/images/personaVectorTwo.png')}
            style={styles.backgroundVector}
            />
            <Text style={styles.description}>{data.description}</Text>
        </View>
        </View>
      </SafeAreaView>
    )
  }
}


export default Nudge;