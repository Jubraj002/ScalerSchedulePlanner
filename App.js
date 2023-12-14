import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, ScrollView, StyleSheet, Alert, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Calendar from 'expo-calendar';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = useState(new Date());

  useEffect(() => {
    requestCalendarPermissions();
    fetchEventsForDay(selectedDate);
  }, []);

  const requestCalendarPermissions = async () => {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissions needed', 'We need calendar permissions to proceed');
      }
    } catch (error) {
      console.error('Error requesting calendar permission', error);
    }
  };

  const fetchEventsForDay = async (date) => {
    try {
      const calendars = await Calendar.getCalendarsAsync();
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0); // Start of the day

      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999); // End of the day

      const events = await Calendar.getEventsAsync(calendars.map(calendar => calendar.id), startDate, endDate);
      setEvents(events);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  const createRecurringEvent = async () => {
    try {
      const calendars = await Calendar.getCalendarsAsync();
      const defaultCalendar = calendars.find(calendar => calendar.allowsModifications);

      if (!defaultCalendar) {
        Alert.alert('Error', 'No modifiable calendars available');
        return;
      }

      const eventDetails = {
        title: 'Weekly Meeting',
        startDate: new Date(selectedDate).toISOString(),
        endDate: new Date(new Date(selectedDate).setHours(new Date(selectedDate).getHours() + 1)).toISOString(),
        timeZone: 'GMT',
        recurrenceRule: {
          frequency: Calendar.Frequency.WEEKLY,
          interval: 1, // Repeat weekly
          occurrence: 10 // Repeat 10 times
        }
      };

      const eventId = await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
      console.log('Event created with ID:', eventId);
      fetchEventsForDay(selectedDate); // Refresh events for the selected day
    } catch (error) {
      console.error('Error creating recurring event', error);
      Alert.alert('Error', 'Failed to create event: ' + error.message);
    }
  };

  const onDateChange = (event, selectedDate) => {
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedDate(selectedDate);
    fetchEventsForDay(selectedDate);
  };
  
  const renderDateItem = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return (
      <TouchableOpacity 
        style={styles.dateItem} 
        onPress={() => onDateChange(null, date)}
      >
        <Text style={styles.dateText}>{date.toDateString().split(' ')[0]}</Text>
        <Text style={styles.dateText}>{date.getDate()}</Text>
      </TouchableOpacity>
    );
  };
  
  const getDatesForScroll = () => {
    let dates = [];
    let currentDate = new Date();
    for (let i = 0; i < 30; i++) { // Change the number for more dates
      let nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + i);
      dates.push(nextDate);
    }
    return dates;
  };

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{new Date(item.startDate).toLocaleTimeString()} - {new Date(item.endDate).toLocaleTimeString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedDate.toDateString()}</Text>
      <ScrollView 
        horizontal={true} 
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {getDatesForScroll().map((date, index) => (
          renderDateItem(date)
        ))}
      </ScrollView>
      <Button title="Show Time Picker" onPress={() => setShowTimePicker(true)} />
      {showTimePicker && (
        <View>
          <DateTimePicker
            value={selectedStartTime}
            mode="time"
            display="default"
            onChange={(event, time) => setSelectedStartTime(time)}
          />
          <DateTimePicker
            value={selectedEndTime}
            mode="time"
            display="default"
            onChange={(event, time) => setSelectedEndTime(time)}
          />
        </View>
      )}
      <Button title="Schedule Weekly Event" onPress={createRecurringEvent} />
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  scrollView: {
    marginBottom: 20,
    paddingHorizontal: 5
  },
  dateItem: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#dddddd',
    borderRadius: 10,
    height: 70
  },
  dateText: {
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  eventListContainer: {
    flex: 1
  },
  eventItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  eventTitle: {
    fontWeight: 'bold'
  }
});

export default App;

