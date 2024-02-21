import { v4 } from "uuid";

export const USER_ACTION = {
    'GET_USERS': 0,
    'RM_LAST_USER': 1,
    'RM_MID_USER': 2,
    'DELETE_USER': 3,
    'ADD_USER': 4,

}

export const reducer_X = (state = [], action) =>{
    console.log('state',  state)
    console.log('action', action)
    switch(action.type){
        case USER_ACTION.GET_USERS:
           return action.payload;
           case USER_ACTION.RM_LAST_USER:
           let a = [...state]
           a.pop()
           return a;
        case USER_ACTION.RM_MID_USER:
        let _state = [...state]
        _state.splice((state.length/ 2), 1)
        return _state;
        case USER_ACTION.DELETE_USER:
        const areYouSure = confirm('silmeye eminsiz?')
        if(areYouSure){
            const  newState = state.filter(({id}) => id !== action.payload)
            return newState;
        }else{
            alert('Zarafat eleme:)')
            return state;
        }
        case USER_ACTION.ADD_USER:
        const username = prompt('enter new username');
        const email = prompt('enter new email')
        const id = v4()
        // return [...state, {id, username, email}]
        return state.concat({id, username, email})
        default:
            return state;
        
    }
    
}