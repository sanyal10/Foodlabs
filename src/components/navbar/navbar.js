import React from "react"
import Image from "./fdlbs.png"


export default function Navbar() {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary shadow ">
            <div class="container-fluid shadow">
                <img src={Image}  style={{marginRight:"15%" ,marginLeft:"7%"}}/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav " >
                <ul class="navbar-nav">
                    <li class="nav-item ">
                    <a class="nav-link fontss" aria-current="page" href="#" >Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fontss" href="#" >Services</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fontss" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fontss " href="#" > Co-Travellers</a>
                    </li>
                    <li>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link fontss" aria-current="page" href="#" >FAQs</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link fontss" aria-current="page" href="#" >Contacts</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link  fontss" aria-current="page" href="#" >Registers</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

)
};
