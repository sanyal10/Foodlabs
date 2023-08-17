import React from "react";
import './card.css';

export default function Card(props){
    return(
        <div>
            <div className="card-container" >
                <div>
                    <img src={`${props.img}`} className="card-img" />
                    <span >{props.user} </span>
                </div>
                <div style={{margin:"2%",padding:"2%"}}>
                    {props.testimonial}
                </div>
            </div>

        </div>
        
        
    )
}
