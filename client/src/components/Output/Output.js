import React from 'react';
import './Output.css';
var API_URL = 'localhost:8000';


function onClickSubmit() {
        fetch(`http://${API_URL}/data`)
        .then(response => {
            // response.blob()
            //     .then(blob => {
            //     let url = window.URL.createObjectURL(blob);
            //     let a = document.createElement('a');
            //     a.href = url;
            //     a.download = 'config.cfg';
            //     a.click();
            // });
            window.location.href = response.url;
    });
}

const Output = () => {
    return (
        <div className='getConfig'>
            <button onClick={() => onClickSubmit()}>Get config files</button>
        </div>
    )
}

export default Output;