import React, {useEffect, useState} from 'react';
import Header from '../Header'

function ProductComponents(props) {
    useEffect(() => {
        console.log("product component");
    })
    return (
        <>
            <Header/>
            <div>
                <h1>Trang sản phẩm</h1>
            </div>
        </>
    );
}

export default ProductComponents;