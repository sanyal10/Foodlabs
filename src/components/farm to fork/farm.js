import React from "react"
import "./farm.css"
import Image1  from  "./img1.png";
import Image2  from  "./img2.png";
import Image3  from  "./img3.png";
import Image4  from  "./img4.png";



export default function Farm() {
    return(
        <div className="farm-fork">
            <div className="line"> </div>
            <div className="text shadow">
                <h1 className="h1"> Ensuring safety of food from </h1>
                <h2 className="h2"> <span className="h3">Farm</span> to fork</h2>
            </div>
            <div className="farm-cont">
                <div className="farm-box1">
                    <img src={Image1}  />
                    <h2 style={{width:'30%',padding:"2px"}}>Farming <br/> Segregate <br/> crop Store crops safely. Wash before manufacturing Take care of work areas.</h2>
                </div>
                <div className="farm-box1" style={{flexDirection:"row-reverse",justifyContent:"flex-start" }}>
                    <img src={Image2}  />
                    <h2 style={{width:'30%',textAlign:"right"}}>Manufactoring <br/> Working with Tools Maintaining Cleanliness Wear Safety Equipment (PPE) Keep Work Areas and Emergency Exits Clear.</h2>
                </div>
                <div className="farm-box1">
                    <img src={Image3}  />
                    <h2 style={{width:'30%'}}>Distribution <br/> Focus on renewable materials <br/> and packaging Alternative methods of supply Transportation safety.</h2>
                </div>
                <div className="farm-box1">
                    <h2 style={{width:'30%'}}>Distribution <br/> Focus on renewable materials <br/> and packaging Alternative methods of supply Transportation safety.</h2>
                    <img src={Image4}  />
                </div>



            </div>

        </div>
    )
}