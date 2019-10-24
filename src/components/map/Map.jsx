import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Map as GoogleMap , InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { currentLatLng } from '../../utils/map';
import "./scss/index.scss"

const  { REACT_APP_MAP_KEY:key }= process.env;

const Map = ({google, ...props}) => {
    const [myLocation,setMyLocation] = useState({});
    const [marks,setMarks] = useState([]);
    const onMarkerClick = (e) => console.dir(e);
    const onInfoWindowClose = (e) => console.dir(e);
    //e.google.maps.Geocoder.geocode()GeocoderRequest // to get LtgLng
    const handleMarker = (t, map, coords) =>{
        const parsedCoords ={
            lat : coords.latLng.lat(),
            lng : coords.latLng.lng(),
        };
         setMarks([...marks, parsedCoords]);
        map.panTo(coords.latLng)
    };
    const putMarker =  (e) => console.dir(e);
    useEffect(() => {
        if(!myLocation.lat ){
            currentLatLng(setMyLocation);
        }
    },[myLocation.lat])

    return (<MainJsx  onMarkerClick={onMarkerClick}
                      onInfoWindowClose={onInfoWindowClose}
                      putMarker={handleMarker}
                      coordsArr={marks}
                      google={google}
                      myLocation={myLocation}
                      {...props}/>);
}

const MainJsx = ({google,onMarkerClick,onInfoWindowClose,putMarker,coordsArr, myLocation}) => (
    <GoogleMap
                  zoom={14}
                  google={google}
                  center={myLocation}
                  onClick={putMarker}
                  style={{
                      position: "relative",
                      width: "100vw",
                      height: "50vh",
                      display: "inline-block",
                      overflow: "auto",
                  }}

    >
                   {
                       coordsArr.map((coords)=>(<Marker
                               key={Object.values(coords).reduce((acc,next) => `${acc}${next}`)}
                               position={{...coords}}
                               name={'Current location'} />
                       ))
                   }
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