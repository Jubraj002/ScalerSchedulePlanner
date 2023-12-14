import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  successData: {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#1A2C47',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 48
  },
  description: {
    color: '#61738E',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cta: {
    backgroundColor: '#481F66',
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    paddingTop: 8,
    textAlign: 'center',
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20
  },
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});        