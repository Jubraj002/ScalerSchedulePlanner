import fetch from 'isomorphic-fetch';

async function fetchData(method, url = "", data = {}) {
  console.log(data);
  try {
    const options = {
      method: method, 
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }

    if (method === 'POST') {
      options.body = JSON.stringify(data); // body data type must match "Content-Type" header
    }

    const response = await fetch(url, {...options});

    const json = await response.json(); // parses JSON response into native JavaScript objects
    return json;
  } catch (error) {
    console.log('logging ===  ', error);
  }
  // debugger;
}

export function submitPersona(persona){
  return fetchData(
    'POST', 
    'https://9.staging.sclr.ac/api/v4/mobile/assistant-persona',
    {... persona, email: 'akanksha.pant@scaler.com'}
  )
}

export function fetchPersona(persona){
  return fetchData(
    'GET', 
    'https://9.staging.sclr.ac/api/v4/mobile/assistant-persona?email=akanksha.pant@scaler.com',
  )
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