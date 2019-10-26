import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userLogin } from './formActions';
import './scss/index.scss';

const LoginForm = ({ loginAs, isAdmin }) => {
    const { push } = useHistory();
    const [ inputs, setInputs] = useState({})

    const changeInputsValue = (e) => {
        const {name, value} = e.target;
        inputs[name]= value;
        setInputs(inputs);
    }
    const sendData = (e) => {
        e.preventDefault();
        if(!inputs.error){
            push(`${isAdmin?"/admin":""}/map`);
            loginAs(inputs);
        }
         /*TODO: add validation for inputs fields if there will be some time*/
    }
    return ( <MainJsx handleSubmit={sendData} handelChange={changeInputsValue} inputs={inputs} />);
}
const MainJsx = ({handelChange, handleSubmit}) => {
    return(
        <Col xs={12} className=" d-flex justify-content-center align-items-center vh-90 " >
            <Form onSubmit={handleSubmit}>
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
                        <Button> Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    )
};
Form.propTypes = {
    props: PropTypes.any,
};

const mapStateFromProps = ({userInfo:{auth}}) =>({
    isAdmin: auth === "admin"
});
const mapDispatchToProps = dispatch =>({
    loginAs: (inputs) => dispatch(userLogin(inputs))
});
export default connect( mapStateFromProps, mapDispatchToProps )(LoginForm);