import React, { useState } from 'react';



const SearchBar = ({value, onChange}) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    console.log(searchKeyword);
    return ( 
        <div>
            <form>Search Song</form>
            <input type='search' value={value} onChange={event => onChange(event.target.value)}/>
        <button>Search</button>
        </div>
     );
};
 
export default SearchBar;
