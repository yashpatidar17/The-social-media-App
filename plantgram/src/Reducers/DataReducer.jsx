export const dataReducer = (state,action) =>{
    switch(action.type){
        case "Get_All_Post":{
            return {...state,post : [...action.payload]}
        }
        case "Get_All_Users":{
            return {...state,AllUsers : [...action.payload]}
        }
        default:{
            return state;
        }
    }
}