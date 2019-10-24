import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Map as GoogleMap , InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./scss/index.scss"

const  { REACT_APP_MAP_KEY:key }= process.env;

const Map = ({google, ...props}) => {
    const onMarkerClick = (e) => console.dir(e);
    const onInfoWindowClose = (e) => console.dir(e);
    //e.google.maps.Geocoder.geocode()GeocoderRequest // to get LtgLng
    const handleMarker = (t, map, coords) =>{
        let lat = coords.latLng.lat(),
            lng = coords.latLng.lng();
        console.dir({lat,lng, map })
        map.panTo(coords.latLng)
    };

    const putMarker =  (e) => console.dir(e);
    //const =google;

    return (<MainJsx  onMarkerClick={onMarkerClick}
                      onInfoWindowClose={onInfoWindowClose}
                      putMarker={handleMarker}
                      google={google}
                      {...props}/>);
}
/*
*
                  <Marker onClick={onMarkerClick}
                          name={'Current location'} />

*
* */
const MainJsx = ({google,onMarkerClick,onInfoWindowClose,putMarker}) => (
    <GoogleMap
                  zoom={14}
                  google={google}
                  onClick={putMarker}
                  style={{
                      position: "relative",
                      width: "100vw",
                      height: "50vh",
                      display: "inline-block",
                      overflow: "auto",
                  }}
    >
                  <InfoWindow onClose={onInfoWindowClose}>
                      <div>
                          <h1>!!!!</h1>
                      </div>
                  </InfoWindow>
              </GoogleMap>
);
Map.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ userInfo }) => ({ userInfo });
export default connect(stateFromProps)( GoogleApiWrapper({apiKey: `${key}`})(Map));