import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF'
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
  },
  problemBlock:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: '80%'
  },
  problem: {
    display: 'flex',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F4F6F9',
    fontSize: 16.2,
    lineHeight: 28.8,
    width: '100%'
  },
  problemTitle: {
    color: '#481F66',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8
  }
});