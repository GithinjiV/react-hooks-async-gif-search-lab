import React, { useState } from "react"

function GifSearch({onSubmit}){
    const [onSearchGif, setSearchGif] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(onSearchGif)
    }
    
    return(
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text" name="search" value={onSearchGif} onChange={(e)=>{setSearchGif(e.target.value)}} placeholder="Search GIPHY"  />
            <button type="submit">Submit</button>
        </form>
    )
}

export default GifSearch