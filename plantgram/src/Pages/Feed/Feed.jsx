import { Navbar } from "../../Components/Nav/Navbar"
import { PostCard } from "../../Components/PostCard/PostCard"
import { Suggestion } from "../../Components/Suggestions/Suggestion"
import "./feed.css"
export const Feed = ()=>{
    return(
        <div className="Feed">
            <div className="v-nav">
                <Navbar/>
            </div>
            <div className="Feed-first">
            <div className="feed-card">
                <PostCard/>
            </div>
            <div className="suggestion">
                <Suggestion/>
            </div>
            </div>
            
        </div>
    )
}