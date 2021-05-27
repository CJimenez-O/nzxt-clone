import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
	const { isSidebarOpen, closeSideBar } = useProductsContext();
	return (
		<SidebarContainer
			style={{
				display: `${isSidebarOpen ? "block" : "none"}`,
			}}
		>
			<aside>
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
						<Link
							className="link"
							to="/audio"
							style={{ textDecoration: "none" }}
						>
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
						<Link
							className="link"
							to="/blog"
							style={{ textDecoration: "none" }}
						>
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
			</aside>
		</SidebarContainer>
	);
}

const SidebarContainer = styled.nav`
	text-align: center;
	background-color: black;

	li {
		border-bottom: 3px solid #51007a;
		padding-top: 20px;
		padding-bottom: 20px;
		font-size: 18px;
	}

	.hide {
		display: none;
	}

	li .link {
		color: white;
		font-weight: 600;
	}

	.showSideBar {
		display: block;
	}
`;

export default Sidebar;
