import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";

function BuildingMenu() {
	const { isBuiltMenuOpen, closeBuiltMenu } = useProductsContext();
	return (
		<Wrapper style={{ display: `${isBuiltMenuOpen ? "block" : "none"}` }}>
			<div className="sub-menu">
				<div className="link-list">
					<h4 className="nav-title">CASES</h4>
					<Link
						to="/collection/h710"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>H710</p>
						<p className="sub">Mid-Tower</p>
					</Link>
					<Link
						to="/collection/h510"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>H510</p>
						<p className="sub">Mid-Tower</p>
					</Link>
					<Link
						to="/collection/h210"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>H210</p>
						<p className="sub">Mini-ITX</p>
					</Link>
					<Link
						to="/collection/h1"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>H1</p>
						<p className="sub">Small Form Mini ITX</p>
					</Link>
					<Link
						to="/collection/crft"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>CRFT</p>
						<p className="sub">Limited Edition</p>
					</Link>
				</div>
				<div className="link-list mid">
					<h4 className="nav-title">COOLING</h4>
					<Link
						to="/collection/kraken-z"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>Kraken Z</p>
						<p className="sub">AIO Liquid Cooler with LCD Display</p>
					</Link>
					<Link
						to="/collection/kraken-x"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>Kraken X</p>
						<p className="sub">
							AIO Liquid Cooler with Infinity Mirror Display
						</p>
					</Link>
					<Link
						to="/collection/kraken-m"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>Kraken M</p>
						<p className="sub">
							AIO Liquid Cooler with Infinity Mirror Display
						</p>
					</Link>
					<Link
						to="/collection/aer"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>AER</p>
						<p className="sub">High Performance and RGB fans</p>
					</Link>
				</div>
				<div className="link-list right">
					<h4 className="nav-title">COMPONENTS</h4>
					<Link
						to="/collection/motherboards"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>Motherboards</p>
						<p className="sub">Gming Motherboards</p>
					</Link>
					<Link
						to="/collection/psu"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>Power</p>
						<p className="sub">80 Plus Rated PSUs</p>
					</Link>
					<Link
						to="/collection/lighting"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closeBuiltMenu}
					>
						<p>Lighting</p>
						<p className="sub">Expanded RGB Lighting and Control</p>
					</Link>
				</div>
			</div>
			<div className="promo">
				<Link
					className="promo-link"
					style={{ "text-decoration": "none" }}
					onClick={closeBuiltMenu}
					to="/collection/starter-pc"
				>
					<p className="promo-title">New to PC gaming? </p>
					<p className="promo-details">Check out our Starter PC family</p>
				</Link>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	align-items: center;
	justify-content: center;
	background-color: white;
	position: fixed;
	min-width: 450px;
	z-index: 42;
	padding-bottom: 0px;
	margin-left: -17rem;
	border-radius: 15px;

	.sub-menu {
		padding-top: 30px;
		margin-left: 10%;
		margin-right: 5%;
		display: flex;
		gap: 90px;
		width: 90%;
	}

	.link-list {
		gap: 80px;
		color: black;
	}

	.mid {
		width: 30%;
	}

	.right {
		position: relative;
		left: -3%;
	}

	.nav-title {
		color: gray;
	}

	.link {
		color: black;
		margin-top: 20px;
		font-size: 13px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.sub {
		color: gray;
		font-size: 11px;
		width: 80%;
		padding-top: 2px;
	}

	.promo {
		background-color: #2f2e34;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		padding-bottom: 30px;
		padding-top: 30px;
		padding-left: 10%;
	}

	.promo-link {
		color: white;
	}

	.promo-title {
		margin-bottom: 5px;
		font-size: 15px;
		font-weight: 600;
		color: white;
	}

	.promo-details {
		font-size: 15px;
		font-weight: 600;
		color: white;
	}
`;

export default BuildingMenu;
