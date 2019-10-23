import React from 'react';
import {Map as GoogleMap , InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const  { REACT_APP_MAP_KEY:key }= process.env;

const Map = (props) => {
    const onMarkerClick = (e) => console.dir(e);
    const onInfoWindowClose = (e) => console.dir(e);
    const handleMarker = (e) => console.dir(e);

    return ( <MainJsx onMarkerClick={onMarkerClick}
                      onInfoWindowClose={onInfoWindowClose}
                      putMarker={handleMarker}
                      {...props}/>);
}
const MainJsx = ({google,onMarkerClick,onInfoWindowClose,handleMarker}) => (
              <GoogleMap onClick={handleMarker} google={google} zoom={14}>
                  <Marker onClick={onMarkerClick}
                          name={'Current location'} />

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