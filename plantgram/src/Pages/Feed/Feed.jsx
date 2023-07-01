import { Navbar } from "../../Components/Nav/Navbar"
import { PostCard } from "../../Components/PostCard/PostCard"
import { PostInput } from "../../Components/PostInput/PostInput"
import { Sorting } from "../../Components/Sort/Sorting"
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
                <PostInput/>
                <Sorting/>
                <PostCard/>
            </div>
            <div className="suggestion">
                <Suggestion/>
            </div>
            </div>
        </div>
    )
}