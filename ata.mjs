import fetch from 'node-fetch'

// const postData = async (
//   url = 'http://localhost:5540/users/login',
//   data = { email: 'iadfbdmsv@mail.com', Name: 'addu' }
// ) => {
//   // console.log(data)
//   const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // Body data type must match "Content-Type" header
//     body: JSON.stringify(data),
//   })

//   try {
//     const newData = await response.json()
//     console.log(newData)
//     return newData
//   } catch (error) {
//     console.log('error', error)
//   }
// }

// postData()

async function requestFromAPI(url) {
  const result = await fetch(url)
  let data = await result.json()
  return data
  
}

//usage :
const REQUEST = 'http://localhost:5540/users/logup?email=maneyrocks@gmail.com'
// console.log(requestFromAPI(REQUEST))

fetch(REQUEST)
  .then(function (response) {
    return response.json()
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson))
  })