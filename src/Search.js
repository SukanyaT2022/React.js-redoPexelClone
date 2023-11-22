import React, { useState } from 'react'

const Search = (props) => {
    const [search,setSearch] = useState("")
    let apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
    const apiUrl = `https://api.pexels.com/v1/search?query=${search}&orientation=landscape&per_page=10`;
//we sent data back to app.js
    // const handleSearch =(e)=>{
    //     setSearch(e.target.value)
    // }
    const searchHandler = ()=>{

        fetch(apiUrl, {
          method: 'GET',
          headers: {
            Authorization: apiKey,
          },
        })
          //handle promise
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            props.onDataCatch(data.photos)
          });
    
    }
  return (
    <div>
      <input type="text" placeholder='Search Category' onChange={(e)=>setSearch(e.target.value)}/>
      {/* <input type="text" placeholder='Search Category' onChange={handleSearch}/> */}
      <button onClick={searchHandler}>Search</button>
      
    </div>
  )
}

export default Search
