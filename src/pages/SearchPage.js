import React from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = () => {

    let {searchQuery} = useParams();
    console.log(searchQuery)

    
  return (
    <div>
    Hi
    </div>
  )
}

export default SearchPage