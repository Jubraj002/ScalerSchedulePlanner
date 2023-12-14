import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 18,
  },
  title: {
    color: '#481F66',
    fontSize: 21.6,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
   fontSize: 16.2,
   lineHeight: 28.8,
   marginBottom: 24,
   color: '#481F66'
  },
  formField: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D6DEE5',
    display: 'flex',
    width: '100%',
    height: 48,
    fontSize: 16,
    color: '#481F66',
    paddingLeft: 12,
    paddingRight: 12
  },
  label: {
    fontSize: 12.6,
    fontWeight: 'bold',
    color: '#481F66'
  },
  bullet: {
    fontSize: 18.2,
    fontWeight: 'bold',
    color: '#913ECE'
  },
  radioBtn: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D6DEE5',
    lineHeight: 28.2,
    padding: 4,
    color: '#481F66'
  },
  radioBtnLabel: {
    color: '#481F66'
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
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
});

