import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import logo from "../images/icon.png"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarBrand href="/">
            <img
              src={logo}
              style={{
                border: "1px solid",
                borderRadius: "50%",
                height: "45px",
                width: "45px",
              }}
              alt="andrzej"
            ></img>
            &nbsp;Blog
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">O serii</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/author">O autorach</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">Tagi</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
