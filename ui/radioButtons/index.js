import React from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioButtons({ 
    radioButtons,
    setSelectedId,
    selectedId,
    btnStyle,
    labelStyle,
    containerStyle
  }) {

  const formattedButtons = radioButtons.map((button) => {
    return (
      {
        containerStyle: btnStyle,
        labelStyle,
        borderColor: '#A5B3C8',
        borderSize: 1,
        ...button
      }
    )
  });

  return (
   <RadioGroup 
      radioButtons={formattedButtons} 
      onPress={setSelectedId}
      selectedId={selectedId}
      containerStyle={containerStyle}
    />
  )
}
