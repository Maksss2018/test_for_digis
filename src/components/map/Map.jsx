import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMarks, setMarks, saveCrCoords } from './mapActions';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';
import { currentLatLng } from '../../utils/map';

import './scss/index.scss';

const { REACT_APP_MAP_KEY: key } = process.env;

const Map = ({ google, handleLoadMarks, saveCrCoords, id, mapInfo, updateMarks, ...props }) => {
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [myLocation, setMyLocation] = useState({});
  const [marks, setMarks] = useState([]);
  const handleMarker = (t, map, coords) => {
    const parsedCoords = {
        lat: coords.latLng.lat(),
        lng: coords.latLng.lng(),
        user_name: id,
      },
      newArr = [...marks, parsedCoords];
    setMarks(newArr);
    updateMarks(newArr);
    map.panTo(coords.latLng);
  };
  const mapConfigs = {
    zoom: 14,
    google,
    center: myLocation,
    onClick: handleMarker,
    style: {
      position: 'relative',
      width: '100vw',
      height: '50vh',
      display: 'inline-block',
      overflow: 'auto',
    },
  };
  const marksLoading = async () => {
    await handleLoadMarks(id);
    setMarks(mapInfo);
  };
  useEffect(() => {
    if (id && !loadingFlag) {
      marksLoading();
      setLoadingFlag(true);
    }
  }, [id, marks]);

  useEffect(() => {
    if (!myLocation.lat) {
      currentLatLng(setMyLocation);
    }
  }, [myLocation.lat]);

  useEffect(() => {
    saveCrCoords(myLocation);
  }, [myLocation]);
  return (
    <MainJsx
      coordsArr={
        mapInfo.length !== 0
          ? mapInfo.map(({ name, icon, ...coords }) => (
              <Marker
                key={Object.values(coords).reduce((acc, next) => `${acc}${next}`)}
                position={{ ...coords }}
                name={name}
                icon={icon}
              />
            ))
          : []
      }
      mapConfigs={mapConfigs}
      {...props}
    />
  );
};

const MainJsx = ({ coordsArr, mapConfigs }) => <GoogleMap {...mapConfigs}>{coordsArr}</GoogleMap>;
Map.propTypes = {
  props: PropTypes.any,
};

const stateFromProps = ({ userInfo: { id }, mapInfo }) => ({ id, mapInfo });
const paramsFromProps = dispatch => ({
  handleLoadMarks: token => dispatch(getMarks(token)),
  updateMarks: marks => dispatch(setMarks(marks)),
  saveCrCoords: mark => dispatch(saveCrCoords(mark)),
});
export default connect(
  stateFromProps,
  paramsFromProps,
)(GoogleApiWrapper({ apiKey: `${key}` })(Map));
