import React from 'react'

function SearchBox({searchfield,searchchange}) {
  return (
    <input className = 'bg-lightest-blue black pa2 b--green ba' type="search" placeholder='search robot' onChange = {searchchange}/>
  )
}

export default SearchBox