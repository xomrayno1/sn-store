
import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {
    Link
} from 'react-router-dom'
import routes from '../../routes'

import '../user/style.css'

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const url = window.location.pathname;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <NavbarBrand href="/" >SN STORE</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {
                                routes.filter(item => item.role.includes("admin")).map(ele => (
                                    <NavItem key={ele.path} className="py-2 d-none d-md-inline-block">
                                        <Link className={url === ele.path ? "nav-link active" : "nav-link"} to={ele.path}>
                                            {ele.name}
                                        </Link>
                                    </NavItem>
                                ))
                            }
                        </Nav>
                        </Collapse>
                </div>
            </nav>
            {/* 
            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Shop in style</h1>
                        <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header> */}
        </>
    );
}

export default Header;