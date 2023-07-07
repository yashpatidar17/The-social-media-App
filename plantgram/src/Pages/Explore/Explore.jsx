import { useContext, useEffect } from "react"
import { Navbar } from "../../Components/Nav/Navbar"
import { PostCard } from "../../Components/PostCard/PostCard"
import { Suggestion } from "../../Components/Suggestions/Suggestion"
import { DataContext } from "../../Context/DataContextProvider"

import "./explore.css"
export const Explore = ()=>{

    const {dataState,dataDispatch} = useContext(DataContext);
    const exploreData = dataState.post
    useEffect(()=>{
        dataDispatch({type:"explore-toggle",payload:true});
    },[])
    return(
        <div className="Feed">
       >
        <h2>Explore</h2>
        <div className="Feed-first">
        <div className="feed-card">
            
            <PostCard propData={exploreData}/>
        </div>
        <div className="suggestion">
            <Suggestion/>
        </div>
        </div>
    </div>
    )
}