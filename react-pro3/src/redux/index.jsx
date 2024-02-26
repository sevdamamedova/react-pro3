const initialStore = {
    count: 0,
    users: [],
    contacts: [],
}

const rootReducer = (store = initialStore, action) => {
  switch(action.type){    
    case 'inc':
        return{...store, count: store.count + 1}
    case 'dec':
        return{...store, count: store.count - 1}
    case 'get_users':
        return{...store, users: action.payload}    
    case 'get_contacts':
        return{...store, contacts: action.payload} 
    case 'add_contact':
        const newContact = {
            "id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
}     
    return{ ...store, contacts: store.contacts.concat(newContact)}
    default:
        return store;
  }
}

export default rootReducer