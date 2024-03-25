import React, {useState, useEffect} from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(){


    const [searchGif, setSearchGif] = useState("")
    const [queryResult, setQueryResult] = useState([])
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=Yb2zHRpOYc82bcuTR8f2hIXJkstkJWyE&rating=g&limit=3`)
            .then(r=>r.json())
            .then(({data})=> {const queryResult = data.map((queryResult) => ({ url: queryResult.images.original.url }));
            setQueryResult(queryResult)});
    }, [searchGif])

    return(
        <div style={{display:"flex"}}>
            <GifSearch onSubmit={setSearchGif}/>
            <GifList results={queryResult}/>
        </div>
    )
}

export default GifListContainer










//GIPHY API key = Yb2zHRpOYc82bcuTR8f2hIXJkstkJWyE

/**
 * https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Yb2zHRpOYc82bcuTR8f2hIXJkstkJWyE&rating=g


 */