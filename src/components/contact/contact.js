import React from "react"
import "./contact.css"

export default function Front() {
    return(
        <>
            <div className="border1"></div>
            <div className="text1"> Contact Us</div>
            <div className="contbox shadow ">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>    
                <button type="button" class="btn btn-secondary">Submit</button>
            </div>
        </>
    )
}