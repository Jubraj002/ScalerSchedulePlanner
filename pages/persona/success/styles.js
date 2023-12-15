import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontWeight: 'bold',
    color: '#481F66',
    fontWeight: 'bold'
  },
  imageBlock: {
    position: 'relative'
  },
  cta: {
    backgroundColor: '#481F66',
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    paddingTop: 8,
    textAlign: 'center',
    borderRadius: 8,
    width: 327,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24
  },
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
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
  heading: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 16,
    width: 240,
    left: 20,
    bottom: 20
  },
  personaIntro: {
    fontWeight: 'bold',
    fontSize: 16.2
  },
  personaName: {
    fontSize: 32.2
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  backgroundVector: {
    width: 375,
    height: 326
  }
});