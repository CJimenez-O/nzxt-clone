import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { FaRegUser, FaRegQuestionCircle, FaAngleLeft } from "react-icons/fa";

function PerifSidebar() {
	const { loginWithRedirect, myUser, logout } = useUserContext();
	const {
		isSidebarOpen,
		isPerifSidebarMenuOpen,
		openSidebar,
		closeSidebar,
	} = useProductsContext();
	return (
		<SidebarContainer>
			<aside
				style={{
					display: `${isPerifSidebarMenuOpen ? "block" : "none"}`,
				}}
				className="standard"
			>
				<div className="sidebar-header">
					<div className="return">
						<button className="arrow" onClick={openSidebar}>
							<FaAngleLeft />
						</button>
					</div>
					<div className="sidebar-title">
						<h3>Peripherals</h3>
					</div>
				</div>
				<ul className="nav_links">
					<li>
						<Link
							className="link"
							style={{ textDecoration: "none" }}
							to="/collection/audio"
							onClick={closeSidebar}
						>
							<h3 className="link-title">Audio</h3>
						</Link>
					</li>
					<li>
						<Link
							className="link"
							style={{ textDecoration: "none" }}
							to="/product/standard-mouse-pad"
							onClick={closeSidebar}
						>
							<h3 className="link-title">NZXT Standard Mouse Pad</h3>
						</Link>
					</li>
					<li>
						<Link
							className="link"
							style={{ textDecoration: "none" }}
							to="/product/large-mouse-pad"
							onClick={closeSidebar}
						>
							<h3 className="link-title">NZXT Large Mouse Pad</h3>
						</Link>
					</li>
					<li>
						<Link
							className="link"
							style={{ textDecoration: "none" }}
							to="/product/puck"
							onClick={closeSidebar}
						>
							<h3 className="link-title">Puck</h3>
						</Link>
					</li>
					<li>
						<Link
							className="link"
							style={{ textDecoration: "none" }}
							to="/product/pan-puck"
							onClick={closeSidebar}
						>
							<h3 className="link-title">Pan Puck</h3>
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

	.nav_links {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	li {
		padding-bottom: 15px;
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

	.sidebar-header {
		display: flex;
		padding-left: 5%;
		padding-right: 5%;
		padding-top: 20px;
		padding-bottom: 20px;
		border-bottom: 1px solid lightgray;
	}

	.arrow {
		margin-top: 5px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
	.sidebar-title {
		margin-left: 20%;
	}

	.link-title {
		font-size: 16px;
		margin-bottom: 5px;
	}

	.link-sub {
		font-size: 10px;
		color: gray;
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

export default PerifSidebar;
