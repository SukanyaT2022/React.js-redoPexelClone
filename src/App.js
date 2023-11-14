import React, { useState } from 'react'

const App = () => {
//declare state step 2
const [data,setData] = useState()



  var apiKey = "c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U";
  var auth = "https://api.pexels.com/v1/search?query=";
   //step 1 bring api
  //use chat gpt use api call to pexel api- keyword to find skeleton
  
  const category = 'nature'; // Replace with the desired category
  const apiUrl = `https://api.pexels.com/v1/search?query=${category}&per_page=10`;
  
  // Make a GET request to the Pexels API
  //promise
  fetch(apiUrl, {
  method: 'GET',
  headers: {
  'Authorization': apiKey,
  },
  })
  //handle promise
  .then(response=>response.json())
  .then(data=>setData(data.photos))

//step 3 above bring data inside data by using setData--data store inside datat state

  


  return (

    <div>
{/* //step4 map data --open consoloe photo-src-small
data && if we have data run otherwise not run
*/}
         {data && data.map((val)=>{
    <img src={val.src.small}/>
  })
}
    </div>
  )
}

export default App
