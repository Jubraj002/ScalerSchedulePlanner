import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'relative',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10
  },
  option: {
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    borderColor: '#D6DEE5',
  },
  groupTitle: {
    color: '#481F66',
    fontSize: 16.2,
    marginBottom: 8,
    fontWeight: 'bold',
    marginTop: 8
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
    marginBottom: 24,
    position: 'absolute',
    bottom: 20,
    marginLeft: 10
  },
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    height: 87,
    width: 87,
    borderRadius: 43.5
  },
  imageBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10
  },
  personaTitle: {
    color: '#481F66',
    fontSize: 36,
    fontWeight: 'bold'
  },
  personaDescription: {
    color: '#481F66',
    fontSize: 14
  },
  selectedOption: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#F9F4FC',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    borderColor: '#913ECE'
  },
  addButton: {
    color: '#913ECE',
    borderColor: '#913ECE',
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    borderWidth: 1,
    position: 'absolute',
    bottom: 90,
    marginLeft: 10,
    marginRight: 10,
    width: 327,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#913ECE'
  }
});        
