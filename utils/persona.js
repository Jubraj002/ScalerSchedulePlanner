export const WELCOME_SCREEN_INFORMATION = {
  headerDescription: 'Create your personalised',
  headerTitle: 'AI Enforcer!',
  description: 'Remember as a child how your mother used to push you to study or how the fear of your dad’s belt made you pick up the book as soon as your heard his bike’s sound or the scariest teacher in coaching institute who made you study ? Now, you can recreate the same feeling to ensure you study at Scaler!'
}

export const PERSONA_FORM_ENFORCER_OPTIONS = [
  {
    id: '1', 
    label: 'Father',
    value: 'Father'
  },
  {
    id: '2', 
    label: 'Mother',
    value: 'Mother'
  },
  {
    id: '3', 
    label: 'Friend',
    value: 'Friend'
  },
  {
    id: '4', 
    label: 'Partner',
    value: 'Partner'
  },
  {
    id: '5', 
    label: 'Child',
    value: 'Child'
  },
  {
    id: '6',
    label: 'Teacher',
    value: 'Teacher'
  }
];

export const PERSONA_FORM_GENDER_OPTIONS = [
  {
    id: '1', 
    label: 'Male',
    value: 'Male'
  },
  {
    id: '2', 
    label: 'Female',
    value: 'Female'
  },
  {
    id: '3', 
    label: 'Others',
    value: 'Others'
  }
];

export const PERSONA_FORM_LANGUAGE_OPTIONS = [
  {
    id: '1', 
    label: 'English',
    value: 'English'
  },
  {
    id: '2', 
    label: 'Hindi',
    value: 'Hindi'
  },
  {
    id: '3', 
    label: 'Tamil',
    value: 'Tamil'
  }
];

export const PERSONA_FORM_COMMUNICATION_OPTIONS = [
  {
    id: '1', 
    label: 'Loving',
    value: 'Loving'
  },
  {
    id: '2', 
    label: 'Caring and Concerned',
    value: 'Caring and Concerned'
  },
  {
    id: '3', 
    label: 'Proud',
    value: 'Proud'
  },
  {
    id: '4', 
    label: 'Strict',
    value: 'Strict'
  },
  {
    id: '5', 
    label: 'Sarcastic',
    value: 'Sarcastic'
  }
];

export const formatOptions = (response) => {
  const tone = PERSONA_FORM_COMMUNICATION_OPTIONS.filter((option) => response.tone === option.id)[0].value;
  const language = PERSONA_FORM_LANGUAGE_OPTIONS.filter((option) => response.language === option.id)[0].value;
  const gender = PERSONA_FORM_GENDER_OPTIONS.filter((option) => response.gender === option.id)[0].value;
  const relation = PERSONA_FORM_ENFORCER_OPTIONS.filter((option) => response.relation === option.id)[0].value;

  return {
    ...response,
    tone,
    language,
    gender,
    relation
  }
}