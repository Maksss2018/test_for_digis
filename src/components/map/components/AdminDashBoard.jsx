import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMarks } from './../mapActions';
import PlaceList from './PlaceList';

const AdminDashBoard = ({ mapInfo }) => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    setPlaces(mapInfo);
  }, [mapInfo]);

  return (
    <>
      <h3
        style={{
          opacity: '0.8',
        }}
        className=" text-center text-dark bg-white shadow-sm "
      >
        Admin DashBoard
      </h3>
      <PlaceList places={places}/>
    </>
  );
};

AdminDashBoard.propTypes = {
  mapInfo: PropTypes.array,
  userInfo: PropTypes.object,
};
const mapStateFromProps = ({ mapInfo, userInfo }) => ({
  mapInfo,
  userInfo,
});
const paramFromProps = dispatch => ({
  getMarks: id => dispatch(getMarks(id)),
});
export default connect(
  mapStateFromProps,
  paramFromProps,
)(AdminDashBoard);
