import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Destiny from '../../assets/destinylogo.png';


const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">Home</NavbarBrand>
                <img src={Destiny} className="logo" alt="logo" />

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="http://google.com">
                            Google Test Route
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;