import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from './styles';
import { DURATION, WEEKDAYS } from '../../../utils/schedule';
import { scheduleEvent } from '../../../utils/scheduleEvent';

export default function SchedulePlanner({navigation}) {
 const [activeDay, setActiveDay] = useState('Monday');
 const [activeStartTime, setActiveStartTime] = useState(new Date().toString());
 const [activeDuration, setActiveDuration] = useState();
 const [slots, setSlots] = useState({});
 const [showDatepicker, setShowDatePicker] = useState(false);
  

 const handleDateChange = (value, date) => {
   const newDate = new Date(date)
   setActiveStartTime(newDate.toString());
   setShowDatePicker(false);
 }

 const handleAddForTheDay = () => {
  if(activeDuration){
   const startTime = new Date(activeStartTime); 
   const endTime = new Date(startTime.getTime() + activeDuration*60000);
   const value = [{start_time: startTime, end_time: endTime}]

   setSlots({
      ...slots,
      [activeDay]: value
   })
  }
 }

 const handleSubmit = () => {
   console.log(slots);
   Object.keys(slots).forEach(day => {
    slots[day].forEach(async (slot) => {
      try {
        await scheduleEvent(slot.start_time, slot.end_time);
      } catch (error) {
        console.error("Error scheduling event:", error);
      }
    });
  });

   navigation.navigate('ScheduleSuccess')
 }

 const handleWeekdayChange = (weekday) => {
  setActiveDay(weekday);
  setActiveDuration(0);
  setActiveStartTime(new Date().toString());
 }

 console.log(activeDay);
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
            <TouchableOpacity 
              style={activeDay === weekday ?  styles.selectedOption : styles.option}
              onPress={() => handleWeekdayChange(weekday)}
            >
              <Text style={styles.optionText}>{weekday}</Text>
            </TouchableOpacity>
            )}
           </View>
      </View>
      <View style={styles.groupContainer}>
         <Text style={styles.groupTitle}>Choose Start Time</Text>
         <TouchableOpacity style={styles.option} onPress={() => setShowDatePicker(true)}>
           <Text>{new Date(activeStartTime).toLocaleTimeString()}</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.groupContainer}>
         <Text style={styles.groupTitle}>For how long?</Text>
         <View style={styles.optionsContainer}>
            {DURATION.map((timing) => 
            <TouchableOpacity
             style={timing === activeDuration ? styles.selectedOption : styles.option} 
             onPress={() => {setActiveDuration(timing)}}
             >
               <Text>{timing} mins</Text>
            </TouchableOpacity>
            )}
         </View>
      </View>
      {
         showDatepicker && <DateTimePicker mode='time' value={new Date()} onChange={handleDateChange}/>
      }
      <TouchableOpacity
         onPress={handleAddForTheDay}
         style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Add for the day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cta}
        onPress={handleSubmit}
      > 
        <Text style={styles.ctaText}> Create Plan & Add to Calendar! </Text>
      </TouchableOpacity>
    </View>
 );
}