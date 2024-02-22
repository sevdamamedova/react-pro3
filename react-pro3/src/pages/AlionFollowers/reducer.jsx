import axios from "axios";

export const initialStore = {
    count: 0,
    followers: []
}

const _url = 'https://api-githup.com/users/Ali-GreenHeart/followers'

export const _action = {
    'get_followers': 0,
}

const alion_follower_reducer = (store, action) => {
    switch(action.type){
        case _action:
            // const data = await getFollowers()
            return {...store, followers: action.payload}
    }

}
 
export async function getFollowers (){
    const {data} = await axios.get(_url)
    return data;
}
export default alion_follower_reducer;