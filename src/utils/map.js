const currentLatLng =  (fn) => navigator.geolocation.getCurrentPosition(async (position) =>{
    const {coords:{latitude:lat, longitude:lng}} = await position;
    return  fn({
        lat,
        lng
    })
})
export {
    currentLatLng
}