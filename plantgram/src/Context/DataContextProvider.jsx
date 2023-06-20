import { createContext, useReducer } from "react"
import { dataReducer } from "../Reducers/DataReducer"

const DataInitialState = {post:[],AllUsers:[],bookmark:[]}
export const DataContext = createContext()
export const DataContextProvider = ({children}) =>{

    const [dataState,dataDispatch] = useReducer(dataReducer,DataInitialState)
    return(
        <div>
            <DataContext.Provider value={{dataState, dataDispatch,item:4}}>
                {children}
            </DataContext.Provider>
        </div>
    )
}