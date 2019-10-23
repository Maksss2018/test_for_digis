const  { REACT_APP_API_URL:api } = process.env;


const getMain = (fn) => fetch(`${api}/main`)
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err => err.json().then((res)=>fn(res)))
const getUserData = (fn,{password, user}) => fetch(`${api}/users?id_lte=${password}${user}`,{
       method: "GET"
     })
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err =>  console.dir(err) )
export {
    getMain,
    getUserData,
    /*createItem(data) {
        return request.post(`${api}/addItem`, data);
    },

    deleteItem(noteId) {
        return request.delete(`${api}/deleteItem/${noteId}`);
    },
    addPhoto(Data) {
        let data = new FormData();
        data.append('file', Data.file);
        data.append('name', Data.name);
        return request.post(`${api}/addPhoto`,data );
    }*/
}

