import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { DURATION, WEEKDAYS } from '../../../utils/schedule';

export default function SchedulePlanner() {
 const [activeDay, setActiveDay] = useState('Monday');
 const [activeStartTime, setActiveStartTime] = useState('');
 const [activeDuration, setActiveDuration] = useState();
 const [slots, setSlots] = useState({});
 const [showDatepicker, setShowDatePicker] = useState(false);

 const handleDateChange = () => {
   setActiveStartTime(activeStartTime);
   setShowDatePicker(false);
 }

 return (
    <View style={styles.container}>
      <View style={styles.imageBlock}>
         <Image 
           source={require('../../../assets/images/persona.png')}
           style={styles.image}
         />
         <View style={styles.header}>
           <Text style={styles.personaTitle}>Amma...</Text>
           <Text style={styles.personaDescription}>Create a weekly study plan so you study at least 8 hours per week!</Text>
         </View>
      </View>
      <View style={styles.groupContainer}>
         <Text style={styles.groupTitle}>Choose Days</Text>
           <View style={styles.optionsContainer}>
            {WEEKDAYS.map((weekday) => 
            <TouchableOpacity style={styles.option}>
               <Text>{weekday}</Text>
            </TouchableOpacity>
            )}
           </View>
      </View>
      <View style={styles.groupContainer}>
         <Text style={styles.groupTitle}>Choose Start Time</Text>
         <TouchableOpacity style={styles.option} onPress={() => setShowDatePicker(true)}>
           <Text>{activeStartTime} mins</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.groupContainer}>
         <Text style={styles.groupTitle}>For how long?</Text>
         <View style={styles.optionsContainer}>
            {DURATION.map((timing) => 
            <TouchableOpacity style={styles.option}>
               <Text>{timing} mins</Text>
            </TouchableOpacity>
            )}
         </View>
      </View>
      {
         showDatepicker && <DateTimePicker mode='time' value={new Date()} onChange={handleDateChange}/>
      }
      <TouchableOpacity
        style={styles.cta}
        onPress={() => navigation.navigate('PersonaForm')}
      > 
        <Text style={styles.ctaText}> Create Plan & Add to Calendar! </Text>
      </TouchableOpacity>
    </View>
 );
}