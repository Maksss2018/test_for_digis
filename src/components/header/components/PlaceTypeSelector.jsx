import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {generate as id} from "shortid"
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import Form from "reactstrap/es/Form";
import { getTypeSelectorData } from '../headerActions';

const PlaceTypeSelector = ({ getOptions, headerInfo, getLocalPlaces }) => {
    const  [ current, setCurrent ] = useState(0);
    const selectOption = (e) =>{
        let trg = e.target.value;
        if( trg !== current ){
            setCurrent(trg);
        }
    };
    useEffect(()=>{
        if(headerInfo === null){
            getOptions();
        }
    },[]);
    useEffect(()=>{
        if(headerInfo!==null){
            getLocalPlaces(current.replace(" ","_"));
        }
    },[current]);
    return(<Template
        handleSelect={selectOption}
        optionsArr={headerInfo!==null?headerInfo:[]} />);
}

const Template = ({optionsArr, handleSelect}) => (
    <Form id="form-type-selector" className=" my-auto " >
        <FormGroup className="row px-3">
            <Input
                defualtValue={"atm"}
                onChange={handleSelect}
                className=" col-12 col-md-7 "
                type="select"
                name="type"
                id="type-select">
                {
                    optionsArr.map(
                            (option, ind)=>(<option key={id()} value={ind} >{option.replace("_"," ")}</option>)
                        )
                }
            </Input>
        </FormGroup>
    </Form>
)
const mapStateFromProps = ({ headerInfo })=>({ headerInfo });
const dispathcedFromProps = dispatch =>({
    getOptions: () => dispatch(getTypeSelectorData()),
    getLocalPlaces : (type) => dispatch(getTypeSelectorData(type))
});

export default connect( mapStateFromProps, dispathcedFromProps)(PlaceTypeSelector);