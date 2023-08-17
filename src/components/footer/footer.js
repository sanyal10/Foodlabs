import React from "react";
import './footer.css'
import Image from '../navbar/fdlbs.png'


export default function Footer() {
    return(
        <div className="grid-container">
            <div className="footer">
                <img src={Image} style={{width:'80%'}}/>
                <h4>203 Abc road,xyz</h4>
                <> </>
                <h5>Phone : +91 256413654</h5>
                <h5>Email:abc@gmail.com</h5>
            </div>
            <div>
                <div className="container-2">
                    <div>
                        <h5>Home</h5>
                        <h5>services</h5>
                        <h5>training</h5>
                        <h5>registration</h5>
                        <h5>contact</h5>
                    </div>
                    <div>
                        <h5>Home</h5>
                        <h5>services</h5>
                        <h5>training</h5>
                        <h5>registration</h5>
                        <h5>contact</h5>
                    </div>
                </div>
                <h5> Food Labs Inc. © Copyright 2022. All Rights Reserved. </h5>
            </div>
        </div>
    )
}