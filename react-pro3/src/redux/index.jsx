const initialStore = {
    count: 0,
    users: []
}

const rootReducer = (store = initialStore, action) => {
  switch(action.type){
    case 'inc':
        return{...store, count: store.count + 1}
    case 'dec':
        return{...store, count: store.count - 1}    
    default:
        return store;
  }
}

export default rootReducer