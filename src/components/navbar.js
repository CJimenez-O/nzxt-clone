import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaRegWindowClose } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import GamingMenu from "./GamingSec";

const Navbar = () => {
	const {
		openSidebar,
		isSidebarOpen,
		closeSidebar,
		openPrebuilt,
		isPrebuiltOpen,
		closePrebuilt,
	} = useProductsContext();
	const { openCart } = useCartContext();

	return (
		<NavContainer>
			<div className="nav-center">
				<div className="nav-header">
					<button
						type="button"
						className="nav-toggle"
						onClick={isSidebarOpen ? closeSidebar : openSidebar}
					>
						{isSidebarOpen ? <FaRegWindowClose /> : <FaBars />}
					</button>
					<Link to="/" style={{ textDecoration: "none" }}>
						<h4 className="logo">NZXT</h4>
					</Link>
					<button type="button" className="auth-btn" onClick={openCart}>
						<h3 className="signOut">
							<FaShoppingCart />
						</h3>
					</button>
				</div>
				<div className="nav-links">
					<div className="nav-menu">
						<button
							className="nav-btn selected"
							onClick={isPrebuiltOpen ? closePrebuilt : openPrebuilt}
						>
							<h4 className="link">Gaming PCs</h4>
						</button>
						<div className="submenu">
							<GamingMenu />
						</div>
					</div>
					<div>
						<button className="nav-btn">
							<h4 className="link">PC Building</h4>
						</button>
					</div>
					<div>
						<button className="nav-btn">
							<h4 className="link">Peripherals</h4>
						</button>
					</div>
					<div>
						<Link to="/software" style={{ textDecoration: "none" }}>
							<h4 className="link">Software</h4>
						</Link>
					</div>
					<div>
						<Link to="/company" style={{ textDecoration: "none" }}>
							<h4 className="link">Company</h4>
						</Link>
					</div>
				</div>
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	position: fixed;
	width: 100%;
	margin-top: 0px;
	z-index: 40;

	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		color: black;
		font-size: 22px;
		font-weight: 800;
	}

	.nav-btn {
		border: none;
		background-color: white;
		padding-right: 20px;
		cursor: pointer;
	}

	.selected {
	}

	.link {
		font-size: 15px;
		letter-spacing: 0.5px;
		font-weight: 600;
		padding-right: 20px;
	}

	.link:hover {
		color: #7f00f5;
	}

	.nav-toggle {
		background: transparent;
		border: transparent;
		cursor: pointer;
		svg {
			font-size: 1.5rem;
		}
	}
	.nav-links {
		display: none;
		justify-content: center;
		align-items: center;
	}
	.cart-btn-wrapper {
		display: none;
	}

	.auth-btn {
		border: none;
		background-color: transparent;
		color: black;
		font-size: 20px;
		cursor: pointer;
		display: block;
	}

	@media (min-width: 990px) {
		margin-top: 50px;

		.nav-toggle {
			display: none;
		}

		.auth-btn {
			display: none;
		}

		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
				font-size: 10px;
			}
			a {
				color: var(--clr-grey-3);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid var(--clr-primary-7);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

export default Navbar;
