import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { FaRegUser, FaRegQuestionCircle, FaShoppingCart } from "react-icons/fa";
import PrebuiltSidebarMenu from "./PrebulitSidebar";
import PerifSidebarMenu from "./PerifSidebarMenu";

function Sidebar() {
	const { loginWithRedirect, myUser, logout } = useUserContext();
	const {
		isSidebarOpen,
		openPrebuiltSidebar,
		openPerifSidebarMenu,
		closeSidebar,
	} = useProductsContext();
	return (
		<SidebarContainer>
			<aside
				style={{
					display: `${isSidebarOpen ? "block" : "none"}`,
				}}
				className="standard"
			>
				<div className="search">
					<input type="text" placeholder="Search NZXT"></input>
				</div>
				<ul className="nav_links">
					<li>
						<button
							className="link"
							style={{ textDecoration: "none" }}
							onClick={openPrebuiltSidebar}
						>
							Gaming PCs
						</button>
					</li>
					<li>
						<button
							className="link"
							to="/audio"
							style={{ textDecoration: "none" }}
						>
							PC Building
						</button>
					</li>
					<li>
						<button
							className="link"
							to="/pc-products-accessories"
							style={{ textDecoration: "none" }}
							onClick={openPerifSidebarMenu}
						>
							Peripherals
						</button>
					</li>
					<li>
						<Link
							className="link"
							to="/software"
							style={{ textDecoration: "none" }}
							onClick={closeSidebar}
						>
							Software
						</Link>
					</li>
					<li>
						<Link
							className="link"
							to="/company"
							style={{ textDecoration: "none" }}
							onClick={closeSidebar}
						>
							Company
						</Link>
					</li>
				</ul>

				<Link
					className="support"
					style={{ textDecoration: "none" }}
					to="/support"
					onClick={closeSidebar}
				>
					<FaRegQuestionCircle />
					<p>Support</p>
				</Link>
				<div className="signup">
					{myUser ? (
						<button
							type="button"
							className="auth-btn"
							onClick={() => {
								localStorage.removeItem("user");
								logout({ returnTo: window.location.origin });
							}}
						>
							<h3 className="signOut">Sign Out</h3>
						</button>
					) : (
						<button
							type="button"
							className="auth-btn signInTrue"
							onClick={loginWithRedirect}
						>
							<h3>
								<FaRegUser />
							</h3>
							<span className="signIn">Sign In / Sign Up</span>
						</button>
					)}
				</div>
			</aside>
			<PrebuiltSidebarMenu />
			<PerifSidebarMenu />
		</SidebarContainer>
	);
}

const SidebarContainer = styled.nav`
	.standard {
		background-color: white;
		width: 50%;
		position: fixed;
		margin-top: 90px;
		z-index: 40;
		height: 100vh;
	}

	li {
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 16px;
		padding-left: 20px;
	}

	.hide {
		display: none;
	}

	li .link {
		color: black;
		font-weight: 600;
		border: none;
		background-color: transparent;
		font-size: 16px;
		cursor: pointer;
	}

	.showSideBar {
		display: block;
	}

	.search {
		border-bottom: 1px solid lightgray;
	}

	input {
		margin-top: 10px;
		margin-left: 20px;
		margin-bottom: 10px;
		font-size: 18px;
		border-radius: 5px;
		padding: 5px;
		padding-left: 10px;
		border: none;
		background-color: #e3e5e8;
	}

	input::placeholder {
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0.5px;
	}

	input[type="text"]:focus {
		outline: none;
		border: 4px solid #7f00f5;
	}

	.support {
		border: 1px solid lightgray;
		display: flex;
		padding-left: 20px;
		color: #7f00f5;
		font-size: 16px;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.support p {
		padding-left: 10px;
		color: black;
	}

	.signup {
		display: flex;
		padding-left: 20px;
		color: #7f00f5;
		font-size: 16px;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.signup p {
		padding-left: 10px;
		color: black;
	}

	.signInTrue {
		display: flex;
		gap: 10px;
	}

	.auth-btn {
		border: none;
		background-color: transparent;
		color: #7f00f5;
		font-size: 16px;
		cursor: pointer;
	}

	.signIn {
		font-size: 16px;
		font-weight: 400;
		color: black;
	}

	.signOut {
		font-size: 16px;
		font-weight: 400;
	}

	@media (min-width: 1082px) {
		display: none !important;
	}
`;

export default Sidebar;
