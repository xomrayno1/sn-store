import React from 'react';

function ProductList({element}) {
    return (
       <>
        <li>{element.name} - {element.price}</li>
       </>
    );
}

export default ProductList;