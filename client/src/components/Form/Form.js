import React, { useState, useEffect } from 'react';
import './Form.css';



const Form = () => {
    
    
    const [type, setType] = useState("1-3");
    const [ipAdd1, setIpAdd1] = useState("");
    const [mask1, setMask1] = useState("");
    const [ipAdd2, setIpAdd2] = useState("");
    const [mask2, setMask2] = useState("");
    
    

    useEffect(() => {
        const ip2 = document.getElementById('ip-p2');
        console.log(ip2)
        if (type === '4') {
            ip2.classList.remove('ip-p2-show');
            ip2.classList.add('ip-p2-hidden');
        } else {
            ip2.classList.add('ip-p2-show');
            ip2.classList.remove('ip-p2-hidden');
        }

        // function maskExtend (mask) {
        //     switch(mask) {
        //         case "30":
        //             return "255.255.255.252";
        //         case "29":
        //             return "255.255.255.248";
        //         case "28":
        //             return "255.255.255.240";
        //         case "27":
        //             return "255.255.255.224";
        //         case "26":
        //             return "255.255.255.192";
        //     }
        // }

        // var maskExtended1 = maskExtend(mask1);
        // var maskExtended2 = maskExtend(mask2);
        var maskExtended1 = "255.255.255.240";
        var maskExtended2 = "255.255.255.252";

        var gw1 = "";
        var gw2 = "";
        var netw1 = "";
        var netw2 = "";
        var broadcast1 = "";
        var broadcast2 = "";

        function calculateNetworkElements(ipAdd1, maskExt1, ipAdd2, maskExt2) {
            var ipAddLast1 = Number(ipAdd1.split(".")[3]);
            var ipAddLast2 = Number(ipAdd2.split(".")[3]);
            var maskLast1 = Number(maskExt1.split(".")[3]);
            var maskLast2 = Number(maskExt2.split(".")[3]);
            netw1 = ipAdd1.split(".");
            netw1.splice(3, 1, String(ipAddLast1 - (ipAddLast1 % (256 - maskLast1))));
            netw2 = ipAddLast2 - (ipAddLast2 % (256 - maskLast2));
            gw1 = ipAddLast1 - (ipAddLast1 % (256 - maskLast1)) + 1;
            gw2 = ipAddLast2 - (ipAddLast2 % (256 - maskLast2)) + 1;
            broadcast1 = ipAddLast1 - (ipAddLast1 % (256 - maskLast1)) + (255 - maskLast1);
            broadcast2 = ipAddLast2 - (ipAddLast2 % (256 - maskLast2)) + (255 - maskLast2);
            // return netw1;
        }
        calculateNetworkElements(ipAdd1, maskExtended1, ipAdd2, maskExtended2);
        console.log(gw1, netw1, broadcast1)
    });


    return (
        <div className='form-input'>
            <div>
            <span>
                <label htmlFor="Type"> Type </label>
                <select name="Type" id='Type' onChange={ e => setType(e.target.value)}>
                    <option value="1-3">1 / 2 / 3</option>
                    <option value="4">4</option>
                </select>
            </span>
            </div>
            <div>
                <span>IP address </span>
                <input className="ip-input" type="text" placeholder="Enter IP address" onChange={ e => setIpAdd1(e.target.value)}></input>
                <span>
                    <label htmlFor="mask"> Mask </label>
                    <select name="mask" id='mask' onChange={ e => setMask1(e.target.value)}>
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
                    <input className="ip-input" type="text" placeholder="Enter IP address" onChange={ e => setIpAdd2(e.target.value)}></input>
                    <span>
                        <label htmlFor="mask"> Mask </label>
                        <select name="mask" id='mask' onChange={ e => setMask2(e.target.value)}>
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


export default Form;