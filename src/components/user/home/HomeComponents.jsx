import React from 'react';

import Header from '../Header'
import Footer from '../Footer'
import CategoryList from './CategoryList';
import '../style.css'

function HomeComponents(props) {

    return (
        <>
            <Header />
            <section>
                <hr/>
                <div className="container" >
                    <CategoryList />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HomeComponents;