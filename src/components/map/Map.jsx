import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Map as GoogleMap , InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./scss/index.scss"

const  { REACT_APP_MAP_KEY:key }= process.env;

const Map = ({google, ...props}) => {
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
    return (<MainJsx  onMarkerClick={onMarkerClick}
                      onInfoWindowClose={onInfoWindowClose}
                      putMarker={handleMarker}
                      coordsArr={marks}
                      google={google}
                      {...props}/>);
}

const MainJsx = ({google,onMarkerClick,onInfoWindowClose,putMarker,coordsArr}) => (
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