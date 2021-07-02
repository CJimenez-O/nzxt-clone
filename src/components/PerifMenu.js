import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/sidebarContext";
import { Link } from "react-router-dom";

function PerifMenu() {
	const {
		openPerifMenu,
		isPerifMenuOpen,
		closePerifMenu,
	} = useProductsContext();
	return (
		<Wrapper style={{ display: `${isPerifMenuOpen ? "block" : "none"}` }}>
			<div className="sub-menu">
				<div className="link-list">
					<h4 className="nav-title">AUDIO</h4>

					<Link
						to="/collection/audio"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closePerifMenu}
					>
						<p>Audio</p>
					</Link>
				</div>
				<div className="link-list mid">
					<h4 className="nav-title">ACCESSORIES</h4>
					<Link
						to="/product/standard-mouse-pad"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closePerifMenu}
					>
						<p>NZXT Standard Mouse Pad</p>
					</Link>
					<Link
						to="/product/large-mouse-pad"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closePerifMenu}
					>
						<p>NZXT Large Mouse Pad</p>
					</Link>
					<Link
						to="/product/puck"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closePerifMenu}
					>
						<p>Puck</p>
					</Link>
					<Link
						to="/product/pan-puck"
						className="link"
						style={{ "text-decoration": "none" }}
						onClick={closePerifMenu}
					>
						<p>Pan Puck</p>
					</Link>
				</div>
			</div>
			<div className="promo">
				<Link
					className="promo-link"
					to="/product/puck"
					style={{ "text-decoration": "none" }}
				>
					<p className="promo-title">Get organized with Puck</p>
					<p className="promo-details">Hang your headphones & cords in style</p>
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
	margin-left: -9rem;
	border-radius: 15px;

	.sub-menu {
		padding-top: 30px;
		margin-left: 10%;
		margin-right: 10%;
		display: flex;
		gap: 7rem;
		width: 100%;
	}

	.link-list {
		gap: 80px;
		color: black;
	}

	.mid {
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

export default PerifMenu;
