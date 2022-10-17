import React from 'react';
import './Output.css';
var API_URL = 'localhost:8000';


async function onClickSubmit() {
    try {
        return await fetch(`http://${API_URL}/data`);
        // const result = await response.json()
        // console.log(result);
        // return result;
    } catch (err) {
        console.log(err);
    }

}

const Output = () => {
    return (
        <div className='getConfig'>
            <button type='submit' onClick={onClickSubmit}>Get config files</button>
            <div>
                <span><a href="config.cfg" target="_blank" download>config.cfg</a></span>
            </div>
        </div>
    )
}

export default Output;