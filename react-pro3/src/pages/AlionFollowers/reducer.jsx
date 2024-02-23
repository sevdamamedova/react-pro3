import axios from "axios";

export const initialStore = {
    count: 0,
    followers: []
}

const _url = 'https://api-githup.com/users/Ali-GreenHeart/followers'

export const _action = {
    'get_followers': 0,
    'remove_follower': 1,
    'RM_last_follower' : 2,
    'RM_first_with_a': 3,
}

const alion_follower_reducer = (store, action) => {
    switch(action.type){
        case _action.get_followers:
            return {...store, followers: action.payload}
        case _action.remove_follower:
            return {...store, followers: store.followers.filter(({id}) => id !== action.payload)}
        case _action.RM_last_follower:
            return {...store, followers: store.followers.slice(0, store.followers.length - 1)}
        case _action.RM_first_with_a:
            let isFiltered = false
            const newFols = store.followers.filter((fol) =>{
        if(!isFiltered && fol.login.toLowerCase().startsWith('a')){
            isFiltered = true
            return false;
        }
        return true;
            }) 
            return {...store, followers: newFols}
            // const index = store.followers.findIndex((fol) => fol.login.toLowerCase().startsWith('a'))
            // const fols = [...store.followers]
            // fols.splice(index, 1)
            // return {...store, followers: fols}   
            default: 
            return store;
    }

}
 
export async function getFollowers (){
    const {data} = await axios.get(_url)
    return data;
}
export default alion_follower_reducer;