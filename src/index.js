import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "./components/app/App";


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

