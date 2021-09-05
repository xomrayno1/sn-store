import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div >
                <Navbar color="light" light expand="md" >
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <NavbarBrand href="/" >SN STORE</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="py-2 d-none d-md-inline-block">
                                <NavLink href="/manage/category">Quản lý danh mục</NavLink>
                            </NavItem>
                            <NavItem className="py-2 d-none d-md-inline-block">
                                <NavLink href="/manage/product">Quản lý sản phẩm</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;