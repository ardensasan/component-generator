const userReducer = (state={ userList:[]},action:any) => {
    switch(action.type){
        case "GET_USER_LIST": 
        return {...state,userList: action.payload}
        default:
            return state;
    }
}

export default userReducer 