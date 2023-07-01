import { useContext } from "react"
import { DataContext } from "../../Context/DataContextProvider"

export const Sorting = ()=>{
    const {latestHadler,trendingHandler} = useContext(DataContext)
    return(
        <div>
            <button onClick={()=>trendingHandler("trending")}>Trending</button>
            <button onClick={()=>latestHadler("latest")}>Latest</button>
        </div>
    )
}