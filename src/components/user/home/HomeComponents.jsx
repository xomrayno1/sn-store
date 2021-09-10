import React, {useEffect, useState} from 'react';
import Header from '../Header'
import ProductList from './ProductList'
function HomeComponents(props) {
    console.log("home component");

    useEffect(()=>{
        console.log("Home Effect component Every re-render");
    })

    useEffect(()=>{
        console.log("Home  Effect component only re-render");
    },[])

    const products = [{name: "Oshi", price: 700, id : 1}, {name: "Vịt", price: 900, id : 2}, {name: "Gà", price: 800, id : 3}]

    const [show, setShow] = useState(false);

    const onClickShow = () => {
        setShow(!show);
    }

    return (
        <>
            <Header/>
            <div>
                <h1>Trang chủ</h1>
                <button className="btn btn-info" onClick={onClickShow}>Show / Hide</button>
                <ul>
                    {
                        show && products.map(element => <ProductList key={element.id} element={element}/> )
                    }
                </ul>
            </div>
        </>
    );
}

export default HomeComponents;