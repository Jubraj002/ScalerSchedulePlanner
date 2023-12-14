import * as Calendar from 'expo-calendar';
import { Alert } from 'react-native';

export const scheduleEvent = async (start_time, end_time) => {
  try {
    const calendars = await Calendar.getCalendarsAsync();
    const defaultCalendar = calendars.find(calendar => calendar.allowsModifications);

    if (!defaultCalendar) {
      Alert.alert('Error', 'No modifiable calendars available');
      return;
    }

    const eventDetails = {
      title: 'Scaler Study Session',
      startDate: start_time,
      endDate: end_time,
      timeZone: 'GMT',
      recurrenceRule: {
        frequency: Calendar.Frequency.WEEKLY,
        interval: 1, // Repeat weekly
        occurrence: 10 // Repeat 10 times
      }
    };

    const eventId = await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
    console.log('Event created with ID:', eventId);
  } catch (error) {
    console.error('Error creating recurring event', error);
    Alert.alert('Error', 'Failed to create event: ' + error.message);
  }
};
