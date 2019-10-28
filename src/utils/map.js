const currentLatLng = fn =>
  navigator.geolocation.getCurrentPosition(async position => {
    const {
      coords: { latitude: lat, longitude: lng },
    } = await position;
    fn({
      lat,
      lng,
    });
    return {
      lat,
      lng,
    };
  });

const urlParamsGenerator = ({ type, ...otherParams }) => {
  console.dir({ first: type, urlParamsGenerator: otherParams });
  return Object.keys(otherParams).reduce(
    (acc, next, ind) => `${acc}${next}=${otherParams[next]}&`,
    `type=${type}&`,
  );
};

export { currentLatLng, urlParamsGenerator };
