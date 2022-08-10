import React from 'react';
import './Form.css';



const Form = () => {
    

    

    return (
        <div className='form-input'>
            <div>
            <span>
                <label htmlFor="Type"> Type </label>
                <select name="Type" id='Type' onChange={selectType}>
                    <option value="1-3">1 / 2 / 3</option>
                    <option value="4">4</option>
                </select>
            </span>
            </div>
            <div>
                <span>IP address </span>
                <input className="ip-input" type="text" placeholder="Enter IP address"></input>
                <span>
                    <label htmlFor="mask"> Mask </label>
                    <select name="mask" id='mask'>
                        <option value="30">/30</option>
                        <option value="29">/29</option>
                        <option value="28">/28</option>
                        <option value="27">/27</option>
                        <option value="26">/26</option>
                    </select>
                </span>
            </div>
            <div  id="ip-p2">
                <div className='ip-p2-show'>
                    <span>IP address 2 </span>
                    <input className="ip-input" type="text" placeholder="Enter IP address"></input>
                    <span>
                        <label htmlFor="mask"> Mask </label>
                        <select name="mask" id='mask'>
                            <option value="30">/30</option>
                            <option value="29">/29</option>
                            <option value="28">/28</option>
                            <option value="27">/27</option>
                            <option value="26">/26</option>
                        </select>
                    </span>
                </div>
            </div>
            <div>
                <span>Name </span>    
                <input type="text" className="name-input" placeholder="Enter name"></input>
            </div>
        </div>   
    );
}

var dualProc = document.querySelector("#ip-p2");
console.log(dualProc);

function selectType(e) {
    console.log(e)
    if (e.target.value === "4") {
        dualProc.classList.add('ip-p2-hidden');
        console.log('hit here');
    }
    else {
        dualProc.classList.add('ip-p2-show');
    }
}

export default Form;