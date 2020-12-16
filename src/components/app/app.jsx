import React from 'react';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import './app.scss';

const App = () => {
    return (
        <>
            <React.StrictMode>
                <Header />
                <Main />
            </React.StrictMode>
        </>
    );
}
export default App;