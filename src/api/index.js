const  { REACT_APP_API_URL:api } = process.env;

const  apiUrl="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
/* TODO: Make crossdomain request  to get nearest locations by type */
//location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=
// `${Object.keys(params)
// .reduce(
// (acc,next,ind)=>`${acc}{ind!==0|| ind!== Object.keys(params).length-1?"&":""}${next}=${params[next]}`)}`)
// )


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
const getUserMarks = (fn,{password, user}) => fetch(`${api}/usersMarks?id_gte=${password}${user}`,{
    method: "GET"
})
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err =>  console.dir(err) )

const setUserMarks = (fn,{password, user}) => fetch(`${api}/usersMarks`,{
    method: "POST",
    body: JSON.stringify({token: `${password}${user}`} )
})
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err =>  console.dir(err) );
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

