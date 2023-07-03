import { useContext, useEffect } from "react"
import { Navbar } from "../../Components/Nav/Navbar"
import { PostCard } from "../../Components/PostCard/PostCard"
import { Suggestion } from "../../Components/Suggestions/Suggestion"
import { DataContext } from "../../Context/DataContextProvider"
import { ExploreCard } from "../../Components/ExploreCard/ExploreCard"

export const Explore = ()=>{

    const {dataState,dataDispatch} = useContext(DataContext);
    useEffect(()=>{
        dataDispatch({type:"explore-toggle",payload:true});
    },[])
    return(
        <div className="Feed">
        <div className="v-nav">
            <Navbar/>
        </div>
        <div className="Feed-first">
        <div className="feed-card">
            <ExploreCard/>
        </div>
        <div className="suggestion">
            <Suggestion/>
        </div>
        </div>
    </div>
    )
}