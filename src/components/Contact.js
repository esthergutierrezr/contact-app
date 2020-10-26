import React from "react";
import "./Contact.css";

function Contact (props) {
    return (
        <div className="Contact">
            <img className= "avatar" src= {props.avatar} />
            
            <div className="status">
            <h4 className="name">{props.name}</h4>
                <div className="{props.status ? status-online : status-offline}"></div>
               <div className="status-text"> {props.status ? "Online" : "Offline"}</div>
            </div>
        </div>
    )
}

export default Contact;