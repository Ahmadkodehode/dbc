import React from "react"

export default function Header() {
    return (
    <header>
               <img src="./images/me.png" className="Nav--Image"/> 
                <div>
                    <h1>Ahmad KodeHode</h1>
                     <h3>Frontend Devloper</h3>
                          <p>My website</p>
                </div>
                
                <div className="Btns">
                    <button  className="Header--Btn L--Btns">Email</button>
                    <button className="LinkedIn--Btn L--Btns">LinkedIn</button>
                </div>
            </header>
    )
}