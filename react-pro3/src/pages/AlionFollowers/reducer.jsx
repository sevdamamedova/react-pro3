import axios from "axios";

export const initialStore = {
    count: 0,
    followers: []
}

const _url = 'https://api-githup.com/users/Ali-GreenHeart/followers'

export const _action = {
    'get_followers': 0,
    'remove_follower': 1,
}

const alion_follower_reducer = (store, action) => {
    switch(action.type){
        case _action.get_followers:
            return {...store, followers: action.payload}
        case _action.remove_follower:
            return {...store, followers: store.followers.filter(({id}) => id !== action.payload)}
            default: 
            return store;
    }

}
 
export async function getFollowers (){
    const {data} = await axios.get(_url)
    return data;
}
export default alion_follower_reducer;