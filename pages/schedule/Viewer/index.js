import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Agenda } from 'react-native-calendars';
import * as Calendar from 'expo-calendar';

import { styles } from './styles';

const App = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    requestCalendarPermissions();
  }, []);

	const onDayPress = (day) => {
    const date = new Date(day.timestamp);
    fetchEventsForDay(date);
  };
	
  const requestCalendarPermissions = async () => {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissions needed', 'We need calendar permissions to proceed');
      } else {
        fetchEventsForDay(new Date());
      }
    } catch (error) {
      console.error('Error requesting calendar permission', error);
    }
  };

  const fetchEventsForDay = async (date) => {
    try {
      const calendars = await Calendar.getCalendarsAsync();
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);

      const events = await Calendar.getEventsAsync(calendars.map(calendar => calendar.id), startDate, endDate);
      const formattedEvents = formatEventsForAgenda(events);
      setItems(formattedEvents);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  const formatEventsForAgenda = (events) => {
    const formatted = {};
    events.forEach(event => {
      const date = event.startDate.split('T')[0];
      if (!formatted[date]) {
        formatted[date] = [];
      }
      formatted[date].push(event);
    });
    return formatted;
  };

  const renderItem = (item) => {
    return (
      <View style={styles.eventItem}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text>{new Date(item.startDate).toLocaleTimeString()} - {new Date(item.endDate).toLocaleTimeString()}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Agenda
        items={items}
        renderItem={renderItem}
        selected={new Date().toISOString().split('T')[0]}
        onDayPress={onDayPress}
        theme={{
          selectedDayBackgroundColor: 'purple',
          selectedDayTextColor: '#ffffff',
          agendaDayTextColor: 'purple',
          agendaTodayColor: 'purple',
        }}
        renderEmptyData={() => <View><Text>No Events</Text></View>}
      />
    </SafeAreaView>
  );
};

export default App;
