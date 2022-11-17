import React from 'react';
import './Output.css';
var API_URL = 'localhost:8000';


// const [click, setClick] = 

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

function onClickSubmit1() {
        fetch(`http://${API_URL}/data1`)
        .then(response => {
            window.location.href = response.url;
    });
}

function onClickSubmit2() {
        fetch(`http://${API_URL}/data2`)
        .then(response => {
            window.location.href = response.url;
    });
}

function onClickSubmitAll() {
        fetch(`http://${API_URL}/dataAll`)
        .then(response => {
            window.location.href = response.url;
    });
}

const Output = () => {
    return (
        <div className='getConfig'>
            <button id='get' onClick={() => onClickSubmit()}>Get config file</button>
            <button id='get1' onClick={() => onClickSubmit1()}>Get config1 file</button>
            <button id='get2' onClick={() => onClickSubmit2()}>Get config2 file</button>
            <button id='getAll' onClick={() => onClickSubmitAll()}>Get all files</button>
        </div>
    )
}

export default Output;