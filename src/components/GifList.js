import React from "react";

function GifList({results}){
    return(
        <ul>
            {results.map((result)=>(
            <li key={result.url}><img src={result.url} alt="search result"/></li>
        ))}
        </ul>
    )
}

export default GifList