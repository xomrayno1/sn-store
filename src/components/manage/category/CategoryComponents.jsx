import React, {useEffect, useState} from 'react';
import Header from '../Header'

function CategoryComponents(props) {
    useEffect(() => {
        console.log("category component");
    })
    return (
        <>
         <Header/>
        <div>
            <h1>Trang danh mục</h1>
        </div>
        </>
    );
}

export default CategoryComponents;