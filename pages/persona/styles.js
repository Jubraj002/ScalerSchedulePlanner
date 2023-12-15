import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  descriptionBlock: {
    backgroundColor: '#C293E5',
    padding: 21,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imageBlock: {
    position: 'relative',
    height: 316,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 99,
    marginBottom: 0,
  },
  headerDescription: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#481F66',
  },
  description: {
    fontSize: 16,
    marginBottom: 47,
    color: '#481F66',
    lineHeight:24
  },
  cta: {
    backgroundColor: '#481F66',
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    paddingTop: 8,
    textAlign: 'center',
    borderRadius: 8
  },
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  backgroundVector: {
    position: 'absolute',
    right: -11,
    bottom: 0
  }
});