const currentLatLng =  (fn) => navigator.geolocation.getCurrentPosition(async (position) =>{
    const {coords:{latitude:lat, longitude:lng}} = await position;
    return  fn({
        lat,
        lng
    })
})

const urlParamsGenerator = (params={location:"-33.8670522,151.1957362",radius:1500,type:"",keyword:''}) =>
    Object
        .keys(params)
        .reduce((acc,next,ind)=>`${acc}&${next}=${params[next]}`);

export {
    currentLatLng,
    urlParamsGenerator,
}