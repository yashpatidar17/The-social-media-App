import { useContext } from "react"
import { DataContext } from "../../Context/DataContextProvider"
import "./sorting.css";

export const Sorting = ()=>{
    const {latestHadler,trendingHandler} = useContext(DataContext)
    return(
        <div className="sorting-card">
            <button onClick={()=>trendingHandler("trending")} className="sorting-buttons">Trending</button>
            <hr className="sorting-line"/>
            <button onClick={()=>latestHadler("latest")} className="sorting-buttons">Latest</button>
        </div>
    )
}