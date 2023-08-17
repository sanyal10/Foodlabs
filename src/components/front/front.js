import React from "react"
import "./front.css"
import Image  from "./img1.png"
import Image2 from "./img2.png"
import Image3 from "./img3.png"
import Image4 from "./img4.png"
import Image5 from "./img5.png"


export default function Front() {
    return(
        <div className='container1 shadow'>
            <div > 
                <div class='container2 shadow'>
                    <img src={Image} className="img1"/>
                    <img src={Image2} className="img2"/>
                    <img src={Image3} className="img3"/>
                    <img src={Image4} className="img4"/>
                    <img src={Image5} className="img5"/>
                </div>
                <div>
                    <p className="box shadow">
                    Aperiam quia sapiente vel consequatur consequatur omnis sed autem quae. Ipsa et minus consequatur vero et doloribus. Ex error illum consequatur amet ea occaecati odit. Quia similique dolorum officiis distinctio magnam ut facilis. Et dolore est inventore ea et molestiae earum.
                    </p>
                </div>
            </div>
        </div>
        
    )
}