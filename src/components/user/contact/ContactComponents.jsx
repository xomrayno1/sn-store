import React, {useEffect, useState} from 'react';
import Header from '../Header'
function ContactComponents(props) {
    console.log("contact component");
    useEffect(()=>{
        console.log("contact Effect component");
    })
    return (
        <>
        <Header/>
        <div>
            <h1>Liên hệ</h1>
        </div>
    </>
    );
}

export default ContactComponents;