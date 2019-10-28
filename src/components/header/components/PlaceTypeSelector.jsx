import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { generate as id } from 'shortid';
import { FormGroup, Input } from 'reactstrap';
import Form from 'reactstrap/es/Form';
import { getTypeSelectorData, getLocalPlaces } from '../headerActions';

const PlaceTypeSelector = ({ getOptions, headerInfo, getLocalPlaces, center }) => {
  const [current, setCurrent] = useState(0);
  const selectOption = e => {
    let trg = e.target.value;
    if (trg !== current) {
      setCurrent(trg);
    }
  };

  useEffect(() => {
    if (headerInfo !== null && typeof current === 'string') {
      const { lat, lng } = center;

      getLocalPlaces({
        type: headerInfo[Number(current)].replace(' ', '_'),
        radius: 1500,
        location: lng ? `${lat},${lng}` : `37.776896408096846,-122.41965632488001`,
      });
    }
  }, [current]);

  useEffect(() => {
    if (headerInfo === null) {
      getOptions();
    }
  }, []);

  return (
    <Template
      current={current}
      handleSelect={selectOption}
      optionsArr={headerInfo !== null ? headerInfo : []}
    />
  );
};

const Template = ({ optionsArr, handleSelect, current }) => (
  <Form id="form-type-selector" className=" my-auto ">
    <FormGroup className="row px-3">
      <Input
        value={current}
        onChange={handleSelect}
        className=" col-12 col-md-7 "
        type="select"
        name="type"
        id="type-select"
      >
        {optionsArr.map((option, ind) => (
          <option key={id()} value={ind}>
            {option.replace('_', ' ')}
          </option>
        ))}
      </Input>
    </FormGroup>
  </Form>
);
const mapStateFromProps = ({ headerInfo, mainInfo: { center } }) => ({ headerInfo, center });
const dispatchedFromProps = dispatch => ({
  getOptions: () => dispatch(getTypeSelectorData()),
  getLocalPlaces: type => dispatch(getLocalPlaces(type)),
});

export default connect(
  mapStateFromProps,
  dispatchedFromProps,
)(PlaceTypeSelector);
