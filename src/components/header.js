import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const tabs = [
    {
      content: 'Home',
      href: '#home',
    },
    {
      content: 'About Goldskye Systems',
      href: '#AboutGoldskyeSystems',
    },
    {
      content: 'High Pressure Deflashing System',
      href: 'High Pressure Deflashing System',
		},
		{
      content: 'Products',
      href: 'Products',
		},
		{
      content: 'Contact Us',
      href: 'Contact Us',
    },
];
	
const Header = ({ siteTitle }) => (
	
  <header>
			<Navbar collapseOnSelect expand="lg" style={{height: `120px`}}>
				<Container fluid style={{padding: '0px 90px'}}>
  			<Navbar.Brand href="#home" style={{marginRight: '120px'}}>GSS</Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav" >
					<Nav className="mr-auto">
						{tabs.map((tab) => {
								const { href, content } = tab;
								return (
									<Nav.Link href={`/${href}`}
									key={href}
									style={{
										color: `#14212A`,
										fontWeight: `bold`,
										fontFamily: `Roboto`,
										marginRight: '50px'
										}}>
										{content}</Nav.Link>
								)
						})}	
					</Nav>
					<Link 
          to="/">
          Consulting Now
        	</Link>
				</Navbar.Collapse>
					
				</Container>
			</Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
