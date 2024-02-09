// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// const _url = 'https://jsonplaceholder.typicode.com/comments'

// const getContacts = async (_setContacts) => {
//   const {data} = await axios.get(_url)
//   _setContacts(data)
// }

// const Contacts = () => {
//     const [contacts, setContacts] = useState([])
//     const [name, setName] = useState('')
//     useEffect(() => {
//         getContacts(setContacts)
//     },[])

//     const onSubmit = (e) => {
//         e.preventDefault()
//         axios.post(_url, {name}).then(() => {
//           setName('')
//           getContacts(setContacts)
//         })
//         console.log(name)
//     }
    
//     const onEdit = (id) =>{
//       let newName = prompt('Enter new name')
//       axios.put(`${_url}/${id}`, {name: newName}).then(() =>{
//         getContacts(setContacts)
//       })

//     }
//     const onDelete = (id) =>{
//       axios.delete(`${_url}/${id}`).then(() =>{
//         getContacts(setContacts)
//       })
//     }
//   return (
//     <>
//     <form onSubmit={onSubmit}>
//        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//        <button>add contact</button>
//     </form>
//     {
//       contacts.map(({id, name}) => {
//         return <React.Fragment key={id}>
//             <p>{name}</p>
//             <hr />
//             <div>
//                         <button onClick={() => onEdit(id)}>pen</button>
//                         <button onClick={() => onDelete(id)}>close</button>
//                         </div>
//         </React.Fragment>

//       })  
//     }
    
//     </>
//   )
// }

// export default Contacts

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const _url = 'https://jsonplaceholder.typicode.com/comments';

const getContacts = async (setContacts) => {
  try {
    const { data } = await axios.get(_url);
    setContacts(data);
  } catch (error) {
    console.error('İletişim bilgilerini alırken hata oluştu:', error);
    // Hata burada ele alınabilir, örneğin bir hata durumu belirleyerek.
  }
};

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getContacts(setContacts);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(_url, { name }).then(() => {
      setName('');
      getContacts(setContacts);
    });
  };

  const onEdit = (id) => {
    const newName = prompt('Yeni ismi girin');
    if (newName !== null) {
      axios.put(`${_url}/${id}`, { name: newName }).then(() => {
        getContacts(setContacts);
      });
    }
  };

  const onDelete = (id) => {
    axios.delete(`${_url}/${id}`).then(() => {
      getContacts(setContacts);
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={setName} />
        <button>İletişim ekle</button>
      </form>
      {contacts.map(({ id, name }) => (
        <React.Fragment key={id}>
          <p>{name}</p>
          <hr />
          <div>
            <button onClick={() => onEdit(id)}>pen</button>
            <button onClick={() => onDelete(id)}>close</button>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Contacts;
