import React, { useContext } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
	const { openSideBar, initialState } = useProductsContext();

	console.log({ initialState });
	return (
		<NavContainer>
			<div className="header_center">
				<Link className="logo" to="/">
					<img
						src="https://nzxt-site-media.s3-us-west-2.amazonaws.com/assets/v5/icons/nzxt-79a744248d947e5a14df6ebc80f2a61d9a39bdb4e0de6b675b5c05c91ee47f75.png"
						alt="logo"
					/>
				</Link>
				<button type="button" className="nav_toggle" onClick={openSideBar}>
					<FaBars />
				</button>
			</div>
			<ul className="nav_links">
				<li>
					<Link
						className="link"
						to="/pc-products-components"
						style={{ textDecoration: "none" }}
					>
						PC COMPONENTS
					</Link>
				</li>
				<li>
					<a
						className="link"
						style={{ textDecoration: "none" }}
						href="https://www.letsbld.com/"
					>
						GAMING PCS
					</a>
				</li>
				<li>
					<Link className="link" to="/audio" style={{ textDecoration: "none" }}>
						AUDIO
					</Link>
				</li>
				<li>
					<Link
						className="link"
						to="/pc-products-accessories"
						style={{ textDecoration: "none" }}
					>
						GAMING ACCESSORIES
					</Link>
				</li>
				<li>
					<Link
						className="link"
						to="/pc-monitoring"
						style={{ textDecoration: "none" }}
					>
						PC MONITORING
					</Link>
				</li>
				<li>
					<Link className="link" to="/blog" style={{ textDecoration: "none" }}>
						BLOG
					</Link>
				</li>
				<li>
					<Link
						className="link"
						to="/contact"
						style={{ textDecoration: "none" }}
					>
						CONTACT
					</Link>
				</li>
			</ul>
		</NavContainer>
	);
}

const NavContainer = styled.nav`
	margin-left: auto;
	margin-right: auto;
	padding-left: 30px;
	background-color: #51007a;
	display: flex;
	height: 50px;
	padding-top: 15px;

	.logo {
		position: relative;
	}

	.header_center {
		display: flex;
		justify-content: space-between;
	}

	.nav_toggle {
		background: transparent;
		border: transparent;
		color: white;
		padding-right: 30px;
		cursor: pointer;
		svg {
			font-size: 1.5rem;
		}

		display: none;
	}

	.nav_links {
		padding-left: 35px;
		display: flex;
		list-style-type: none;
	}

	li {
		font-size: 14px;
		color: white;
		justify-content: space-between;
		padding-right: 20px;
		letter-spacing: 2px;
	}

	li .link {
		color: white;
	}

	@media (max-width: 1082px) {
		display: block;
		.nav_links {
			display: none;
		}

		.nav_toggle {
			display: unset;
		}
	}
`;

export default Navbar;
