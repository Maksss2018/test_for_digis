import React from 'react';
import { Provider } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderRouter from "./components/header/headerRouter";
import PrivetRouter from "./routerComponents/PrivetRouter";
import MainRouter from "./components/main/mainRouter";
import MapRouter from "./components/map/MapRouter";
import configureStore from './store/configs';

const store = configureStore;
const App = function(props){


    return(<Template {...props} />);
};

const Template = () => (
    <Container fluid={true} className=" px-0 ">
        <Row>
            <Provider store={store}>
                <Router>
                    <PrivetRouter>
                        <HeaderRouter />
                        <MainRouter />
                        <MapRouter />
                    </PrivetRouter>
                </Router>
            </Provider>
        </Row>
    </Container>
)

export default   App;