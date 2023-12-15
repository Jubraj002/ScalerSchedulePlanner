import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles  } from "./styles";
import RadioButtons from "../../../ui/radioButtons";
import { 
  PERSONA_FORM_COMMUNICATION_OPTIONS,
  PERSONA_FORM_ENFORCER_OPTIONS,
  PERSONA_FORM_GENDER_OPTIONS,
  PERSONA_FORM_LANGUAGE_OPTIONS,
  formatOptions
 } from "../../../utils/persona";
import { submitPersona } from "../../../api/api";

function PersonaForm({
  navigation
}) {
  const [formResponse, setFormResponse] = useState({});

  const handleOnInputChange = (key, value) => {
    setFormResponse({...formResponse, [key]: value})
  }

  const handleSubmit = async () => {
    try {
      const formattedResponse = formatOptions(formResponse)
      const response = await submitPersona(formattedResponse);
      navigation.navigate('PersonaCreationSuccess', { 
        imageUrl: 'assets/images/persona.png', 
        description: response.message,
        personaName: 'Amma',
        userName: 'Bharat'
      })
    }
    catch (error){
      console.log(error);
    }
  }

  return(
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Customise your AI Enforcer</Text>
          <Text style={styles.description}>chose someone who inspires you, cares for you and means a lot to you emotionally!</Text>
          <View style={styles.formField}>
            <Text style={styles.bullet}>1.</Text>
            <View>
              <Text style={styles.label} >Pick Your AI Enforcer</Text>
              <RadioButtons 
                radioButtons={PERSONA_FORM_ENFORCER_OPTIONS}
                selectedId={formResponse.relation}
                setSelectedId={(value) => handleOnInputChange('relation', value)}
                btnStyle={styles.radioBtn}
                labelStyle={styles.radioBtnLabel}
                containerStyle={styles.radioContainer}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.bullet}>2.</Text>
            <TextInput
              style={styles.input}
              placeholder="Nick Name"
              onChangeText={(value) => handleOnInputChange('nick_name', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.bullet}>3.</Text>
            <TextInput
              style={styles.input}
              placeholder="Age"
              onChangeText={(value) => handleOnInputChange('age', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.bullet}>4.</Text>
            <View>
              <Text style={styles.label}>Gender</Text>
              <RadioButtons 
                radioButtons={PERSONA_FORM_GENDER_OPTIONS}
                selectedId={formResponse.gender}
                setSelectedId={(value) => handleOnInputChange('gender', value)}
                btnStyle={styles.radioBtn}
                labelStyle={styles.radioBtnLabel}
                containerStyle={styles.radioContainer}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.bullet}>5.</Text>
            <View>
              <Text style={styles.label} >Language</Text>
              <RadioButtons 
                radioButtons={PERSONA_FORM_LANGUAGE_OPTIONS}
                selectedId={formResponse.language}
                setSelectedId={(value) => handleOnInputChange('language', value)}
                btnStyle={styles.radioBtn}
                labelStyle={styles.radioBtnLabel}
                containerStyle={styles.radioContainer}
              />
            </View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.bullet}>6.</Text>
            <TextInput
              style={styles.input}
              placeholder="How do they call you?"
              onChangeText={(value) => handleOnInputChange('alias', value)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.bullet}>7.</Text>
            <View>
              <Text style={styles.label} >Tone of communication</Text>
              <RadioButtons 
                radioButtons={PERSONA_FORM_COMMUNICATION_OPTIONS}
                selectedId={formResponse.tone}
                setSelectedId={(value) => handleOnInputChange('tone', value)}
                btnStyle={styles.radioBtn}
                labelStyle={styles.radioBtnLabel}
                containerStyle={styles.radioContainer}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.cta}
            onPress={handleSubmit}
            disabled={Object.keys(formResponse).length !== 7}
            aria-disabled={Object.keys(formResponse).length !== 7}
          > 
            <Text style={styles.ctaText}> Submit </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
  
  
  export default PersonaForm;