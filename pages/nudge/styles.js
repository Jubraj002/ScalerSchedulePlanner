import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center'
  },
  imageBlock: {
    position: 'relative'
  },
  descriptionBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
  },
  description: {
    fontSize: 16.2,
    lineHeight: 28.8,
    color: '#481F66',
    marginLeft: 10,
    width: 274,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  }
});