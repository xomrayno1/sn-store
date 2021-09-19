import React, {useEffect, useState} from 'react';
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

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const url = window.location.pathname;

    return (
        <div>
            <div>
                <Navbar color="light" light expand="md" >
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <NavbarBrand href="/" >SN STORE</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {
                                routes.filter(item => item.role.includes("user")).map(ele => (
                                    <NavItem className="py-2 d-none d-md-inline-block">
                                        <Link key={"ele.path"} className={url === ele.path ? "nav-link active" : "nav-link"} to={ele.path}>
                                            {ele.name}
                                        </Link>
                                    </NavItem>
                                ))
                            }
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;