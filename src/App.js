import React, { useState,useEffect } from 'react';

const App = () => {
  //declare state step 2
  const [data, setData] = useState();
  const orientation = 'landscape'

  var apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
  //step 1 bring api
  //use chat gpt use api call to pexel api- keyword to find skeleton

  const category = 'nature'; // Replace with the desired category
  const apiUrl = `https://api.pexels.com/v1/search?query=${category}&&orientation=${orientation}&per_page=10`;

  // Make a GET request to the Pexels API
  //promise
  useEffect(()=>{
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
      },
    })
      //handle promise
      .then((response) => response.json())
      .then((data) => {
        console.log(data.photos)
        setData(data.photos)
      });
  },[])

  //step 3 above bring data inside data by using setData--data store inside datat state

  return (
    <div>
      <div className='parent'>
      {/* //step4 map data --open consoloe photo-src-small
data && if we have data run otherwise not run
*/}
        {data &&
          data.map((val) => {
            return(
              <img src={val.src.small} alt='something went wrong'/>
            )
          })}
      </div>
    </div>
  );
};

export default App;
