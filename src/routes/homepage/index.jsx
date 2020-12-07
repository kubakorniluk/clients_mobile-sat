import React from 'react';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import './index.scss';

function Homepage() {
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    );
}
 
export default Homepage;