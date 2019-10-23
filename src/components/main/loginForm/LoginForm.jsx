import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { getData } from './formActions';
import './scss/index.scss';



const LoginForm = (props) => {
    const [ inputs, setInputs] = useState({})
    const changeInputsValue = (e) => {
        const {name, value} = e.target;
        inputs[name]= value;
        setInputs(inputs);
        console.dir({[name]: value, inputs});
    }
    return ( <MainJsx handelChange={changeInputsValue} inputs={inputs} />);
}
const MainJsx = ({handelChange,submite, inputs}) => {
    return(
        <Col xs={12} className=" d-flex justify-content-center align-items-center vh-90 " >
            <Form >
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            onChange={handelChange}
                            type="text" name="user" id="name" placeholder=" user name " />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            onChange={handelChange}
                            type="password" name="password" id="password" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 5, offset: 4 }}>
                        <Button> {`${JSON.stringify(inputs)}`} Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    )
};
Form.propTypes = {
    props: PropTypes.any,
};

const stateFromProps = ({ main }) => ({ main });
const mapDispatchToProps = dispatch =>{
    return {
    reqData: () => dispatch(getData())
}};
export default connect(stateFromProps )(LoginForm);