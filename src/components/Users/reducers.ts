const usersReducer = (state={usersList:[]},action:any) => {
    switch(action.type){
        case "GET_USERS_LIST": 
        return {...state,usersList: action.payload}
        
        default:
            return state;
    }
}

export default usersReducer 