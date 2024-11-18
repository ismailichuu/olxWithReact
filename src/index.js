import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireBaseContext } from './Store/Context'
import Context from './Store/Context';
import db from './FireBase/FireBase'

ReactDOM.render(
    <fireBaseContext.Provider value={{ db }}>
        <Context>
            <App />
        </Context>
    </fireBaseContext.Provider>
    , document.getElementById('root'));
