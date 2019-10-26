import { urlParamsGenerator } from "./../utils/map";
const  { REACT_APP_API_URL:api, REACT_APP_MAP_KEY:googleKey } = process.env;

const  apiUrl="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
/* TODO: Make crossdomain request  to get nearest locations by type */
//location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=

const getLocalPlacesByType = (params,fn) => fetch(`${apiUrl}${urlParamsGenerator(params)}key=${googleKey}`)
    .then(res =>{
        console.dir({ getLocalPlacesByType:res })
        return res.json()
            .then(data => fn(data))
    })
    .catch(err => err.json().then((res)=>fn(res)))

const getMain = (fn) => fetch(`${api}/main`)
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err => err.json().then((res)=>fn(res)))

const getOptions = (fn) => fetch(`${api}/places_types`)
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

const checkUserData = (fn,mocketToken) => fetch(`${api}/users?id_lte=${mocketToken}`,{
    method: "GET"
})
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err =>  console.dir(err) )

const getUserMarks = (fn,mockToken="777MalyiMG") => fetch(`${api}/users_marks?user_name_like=${mockToken}`,{
    method: "GET"
})
    .then(res =>
        res.json()
            .then(data => fn(data))
    )
    .catch(err =>  console.dir(err) )

const cleanAllUserMarks = (trgList,fn) => trgList.forEach( async (id) => {
   await fetch(`${api}/users_marks/${id}`,{
        method: "DELETE",
    }).then(()=>fn()).catch(err =>  console.dir(err) )
})

const saveUserMarks = (data) =>{
    console.dir({fromAPi:true,data})
    return fetch(`${api}/users_marks/`,{
        method: "POST",
        body: JSON.stringify({...data}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res =>
            res.json()
                .then(data => data)
        )
        .catch(err =>  console.dir(err) )
};
export {
    getMain,
    getOptions,
    getUserData,
    getUserMarks,
    checkUserData,
    saveUserMarks,
    cleanAllUserMarks,
    getLocalPlacesByType,
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

