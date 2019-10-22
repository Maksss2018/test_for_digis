import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configs';
import { Container, Row } from 'reactstrap';
import { BrowserRouter as Router} from 'react-router-dom';
import HeaderRouter from "./components/header/headerRouter";
import MainRouter from "./components/main/mainRouter";

const store = configureStore;

function App() {
  return (
      <Container fluid={true} className=" px-0 ">
         <Row>
             <Provider store={store}>
                 <Router>
                     <HeaderRouter />
                     <MainRouter />
                 </Router>
             </Provider>
         </Row>
      </Container>
  );
}

export default App;