import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch] = useState()

    // const handleSearch =(e)=>{
    //     setSearch(e.target.value)
    // }
  return (
    <div>
      <input type="text" placeholder='Search Category' onChange={(e)=>setSearch(e.target.value)}/>
      {/* <input type="text" placeholder='Search Category' onChange={handleSearch}/> */}
      <button>Search</button>
      
    </div>
  )
}

export default Search
