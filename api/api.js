export function submitPersona(persona){
  console.log(persona)
  return {
    status: 200,
    message: 'Insert GPT copy of 2-3 sentences, which shows how happy the persona is that the student is taking the steps to create a study plan to learn and create a bright future!',
    image: ''
  }
}

export function getNudgeScreenData(){
  return {
    description: 'Insert GPT copy of 2-3 sentences, which shows how happy the persona is that the student is taking the steps to create a study plan to learn and create a bright future!',
    imageUrl: '',
    problems: [
      {},
      {}
    ]
  }
}